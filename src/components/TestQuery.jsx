import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import Loading from "./Loading";

function TestQuery() {
  const queryClient = useQueryClient();
  const { data, error, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: () =>
      fetch("https://fakestoreapi.com/products")
        .then((res) => {
          if (!res.ok) {
            throw new Error("Network response was not ok");
          }
          return res.json();
        })
        .catch((error) => {
          throw new Error("There was an error fetching the data");
        }),
    // staleTime: 4000,
    refetchInterval: 4000,
  });

  const { mutate, isPending, isError, isSuccess } = useMutation({
    mutationFn: (newPost) =>
      fetch("https://fakestoreapi.com/products", {
        method: "POST",
        body: JSON.stringify(newPost),
        headers: { "Content-type": "application/json; charset=UTF-8" }, // Perbaikan: Penulisan Content-Type yang benar
      }).then((res) => res.json()),
    onSuccess: (newPost) => {
      queryClient.setQueriesData(["posts"], (oldPost) => [...oldPost, newPost]);
    },
  });

  if (isLoading)
    return (
      <div>
        <Loading />
      </div>
    );
  if (error || isError)
    return <div>Error: {error ? error.message : "Unknown error"}</div>; // Perbaikan: Menambahkan penanganan kesalahan untuk permintaan GET
  if (!data) return null;

  return (
    <section className="flex flex-wrap gap-5  justify-center">
      {isPending && <Loading />}
      <button
        onClick={() =>
          mutate({
            id: 22,
            title: "Baju EFEF 😱😱",
            price: 20,
            description:
              "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
            category: "men's clothing",
            image:
              "https://i.pinimg.com/564x/37/40/27/3740272a41e498b4fcfeb6dad5419f72.jpg",
            rating: {
              rate: 4.1,
              count: 259,
            },
          })
        }
      >
        Add Data
      </button>
      {data.map((item) => (
        <div
          key={item.id}
          className="p-[20px] bg-slate-700 max-w-[320px] rounded-md"
        >
          <img
            className="w-[300px] h-[300px] object-cover"
            src={item.image}
            alt={item.title}
          />
          <p className="truncate text-white">{item.title}</p>
          <p className="text-red-400">${item.price}</p>
        </div>
      ))}
    </section>
  );
}

export default TestQuery;
