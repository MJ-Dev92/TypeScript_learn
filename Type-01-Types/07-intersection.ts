{
  /* InterSection Type: & */

  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    empolyeeId: number;
    work: () => void;
  };

  function internWork(person: Student & Worker) {
    console.log(person.name, person.empolyeeId, person.work());
  }

  internWork({
    name: "MJ",
    score: 99,
    empolyeeId: 12412,
    work: () => {},
  });
}
