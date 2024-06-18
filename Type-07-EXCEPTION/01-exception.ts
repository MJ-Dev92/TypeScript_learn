// Error(Exception) Handing : try -> catch -> finally

function readFile(fileName: string): string {
  if (fileName === "not exist") {
    throw new Error("file not exist");
  }
  return "file contents";
}

function closeFile(fileName: string) {
  //
}

function run() {
  const fileName = "not exist";

  try {
    console.log(readFile(fileName));
  } catch (e) {
    console.log("catched!!");
    return;
  } finally {
    closeFile(fileName);
    console.log("closed!");
  }
}
run();
