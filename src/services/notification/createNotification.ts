import axios from "axios";

const api = axios.create({
  baseURL: "https://onesignal.com/api/v1",
  headers: {
    Authorization: "Basic MTU4M2FiNWQtMDhiZC00NTEzLWI4MjAtOWQwMzE2NzUyNTQy"
  }
});

export const createNotification = async (task: string, dateScheduling: string) => {
  console.log(task)
  console.log(dateScheduling)
  try {
    const res = await api.post("/notifications", {
      app_id: "1cd5379d-ec96-4c9d-8c13-baf5412d34c6",
      contents: {
          en: `Opaa, falta 1 minuto para encerrar a tarefa ${task}`
      },
      headings: {
          en: "Correeee 🏃‍♂️"
      },
      included_segments: [
        "All"
    ],
      send_after: dateScheduling,
    })
    console.log(21, res.config)
  } catch (error: any) {
    console.log(23, error.response)
    throw error;
  }
}