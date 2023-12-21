import { type Action, type Actions } from "@sveltejs/kit";

const login: Action = async ({ request }) => {
  const data = await request.formData();
  const email = data.get("email");
  const password = data.get("password");
  console.log(email, password);

  return { message: "yay", email, password };
};
export const actions: Actions = { login };
