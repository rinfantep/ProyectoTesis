import React from "react";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProvincia } from "../api/provincia.api";
import { useNavigate } from "react-router-dom";

export default function TaskForm() {
  const navigate = useNavigate;
  const queryClient = useQueryClient();

  const addTaskMutation = useMutation({
    mutationFn: createProvincia,
    onSuccess: () => {
      console.log("Product Add");
      queryClient.invalidateQueries("tasks");
    },
  });

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    /*const formData = new FormData(e.tarjet);
    console.log(e.tarjet);
    const product = Object.fromEntries(formData);
    console.log(product);*/
    console.log(title);
    console.log(description);
    addTaskMutation.mutate({
      title,
      description,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="py-8 px-6 bg-white rounded-xl max-w-sm sm:max-w-xl"
    >
      <div className="text-gray-700 grid">
        <label htmlFor="title" className="mb-2">
          Title
        </label>
        <input
          className="border-gray-300 rounded-lg sm:w-96"
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="text-gray-700 grid mt-4">
        <label htmlFor="description" className="mb-2">
          Description
        </label>
        <input
          className="border-gray-300 rounded-lg sm:w-96"
          type="text"
          name="description"
          id="title"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <button className="w-20 h-10 bg-sky-700 border-gray-300 mt-4 rounded text-neutral-100">
        Add Task
      </button>
    </form>
  );
}
