function main() {
  function soma(a, b, c) {
    return a + b + c;
  }

  const n1 = soma(40, 10, 10);
  const n2 = soma(50, 10, 10);
  const n3 = soma(n1, n2, n1);
  const n4 = soma(n1, n2, n3);

  const total = toString(n4);

  console.log(typeof total);
}

main();