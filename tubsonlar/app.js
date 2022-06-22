for (let i = 1; i < 50; i++) {
    for (let j = 2; j < num; j++) {
        if (i % j == 0)
            break
    }
    print(i)
}