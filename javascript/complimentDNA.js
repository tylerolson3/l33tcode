// https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"
// dnaStrand []        `shouldBe` []
// dnaStrand [A,T,G,C] `shouldBe` [T,A,C,G]
// dnaStrand [G,T,A,T] `shouldBe` [C,A,T,A]
// dnaStrand [A,A,A,A] `shouldBe` [T,T,T,T]

function DNAStrand(dna) {
  return dna
    .split("")
    .map((letter) => {
      if (letter === "A") {
        return "T";
      } else if (letter === "T") {
        return "A";
      } else if (letter === "C") {
        return "G";
      } else if (letter === "G") {
        return "C";
      }
    })
    .join("");
}
