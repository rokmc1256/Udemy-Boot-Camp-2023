function allEvens(numberArray) {
    return numberArray.every(checkAllEven => checkAllEven % 2 === 0)
}