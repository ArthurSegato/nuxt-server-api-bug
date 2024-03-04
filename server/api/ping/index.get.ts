export default defineEventHandler((event) => {
  console.log(event.method);
  return { message: "pong" };
});
