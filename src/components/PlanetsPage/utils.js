export default function isOrNot(grid){
    var count = 0
    if((grid[0]) == true) count = count + 1
    if((grid[1]) == true) count = count + 1
    if((grid[2]) == true) count = count + 1
    if((grid[3]) == true) count = count + 1
    if((grid[4]) == true) count = count + 1
    if((grid[5]) == true) count = count + 1
    if((grid[6]) == true) count = count + 1
    if((grid[7]) == true) count = count + 1
    if (( count != 0 )) {
        return true
    } else {return false}

}
