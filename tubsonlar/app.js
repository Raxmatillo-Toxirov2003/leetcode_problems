for (let i = 2; i < 50; i++) {
    for (var j = 2; j < num; j++) {
        if (i % j == 0)
            break
    }
    if (i == j) {
        console.log(i);
    }
}