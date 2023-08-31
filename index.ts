import app from "./server";

const PORT = process.env.PORT || 8888;

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
