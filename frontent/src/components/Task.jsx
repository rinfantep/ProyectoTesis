import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getAllProvincia,
  deleteProvincia,
  updateProvincia,
} from "../api/provincia.api";

export default function Task() {
  const {
    isLoading,
    data: tasks,
    isError,
    error,
  } = useQuery({
    queryKey: ["tasks"],
    queryFn: getAllProvincia,
    select: (tasks) => tasks.sort((a, b) => b.id - a.id),
  });
  const deleteTaskMutation = useMutation({
    mutationFn: deleteProvincia,
    onSuccess: () => {
      console.log("Product Eliminado");
      queryClient.invalidateQueries("tasks");
    },
  });
  const updateTaskMutation = useMutation({
    mutationFn: updateProvincia,
    onSuccess: () => {
      console.log("Product Actualizado");
      queryClient.invalidateQueries("tasks");
    },
  });

  const queryClient = useQueryClient();

  if (isLoading) return <div>Loading...</div>;
  else if (isError) return <div>Error: {error.message} </div>;

  return tasks.map((task) => (
    <div key={task.id}>
      <h3>{task.id}</h3>
      <h3>{task.title}</h3>
      <h3>{task.description}</h3>

      <button
        onClick={() => {
          deleteTaskMutation.mutate(task.id);
        }}
      >
        Delete
      </button>
    </div>
  ));
}
