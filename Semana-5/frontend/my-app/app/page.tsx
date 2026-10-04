"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [items, setItems] = useState<string[]>([]);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("http://localhost:8000/api/items/");
        if (!res.ok) throw new Error("Falha ao carregar dados do servidor.");
        const data = await res.json();
        setItems(data.items || []);
      } catch (err) {
        console.warn("Backend indisponível no momento:", err);
        setErrorMsg("Dados temporariamente indisponíveis.");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 p-6 font-sans dark:bg-black text-black dark:text-zinc-50">
      <main className="flex w-full max-w-xl flex-col items-center gap-6 rounded-2xl bg-white p-8 shadow-md dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
        <h1 className="text-2xl font-bold tracking-tight">
          Painel de Itens — Entrega 6
        </h1>

        {loading ? (
          <p className="text-zinc-500 dark:text-zinc-400">Carregando dados...</p>
        ) : errorMsg ? (
          <div className="w-full rounded-lg bg-amber-50 p-4 border border-amber-200 text-amber-800 dark:bg-amber-950/30 dark:border-amber-900 dark:text-amber-200 text-center">
            <p className="font-medium">{errorMsg}</p>
            <p className="text-xs mt-1 text-amber-700 dark:text-amber-400">
              O backend remoto não respondeu à requisição.
            </p>
          </div>
        ) : (
          <ul className="w-full space-y-2">
            {items.map((item, index) => (
              <li
                key={index}
                className="rounded-lg bg-zinc-100 p-3 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700"
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}