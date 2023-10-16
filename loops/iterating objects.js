const testscores = {
    babykeem: 90,
    kendrick: 99,
    carti: 100,
    frankocean: 88,

}

for (const scores in testscores) {                       //in is used instead of of
    console.log(scores, " ", "marks", " ", "=", " ", testscores[scores]);
}