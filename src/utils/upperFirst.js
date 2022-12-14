const upperFirst = (str) => {
    return !str ? '-' : str.split(' ')
        .map((word) => word[0]
            .toUpperCase() + word.slice(1))
        .join(' ');
}

export default upperFirst;