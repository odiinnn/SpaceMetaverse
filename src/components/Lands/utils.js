export default function isOrNot(grid){
    var count = 0
    if((grid[0]) != 0) count = count + 1
    if((grid[1]) != 0) count = count + 1
    if((grid[2]) != 0) count = count + 1
    if((grid[3]) != 0) count = count + 1
    if((grid[4]) != 0) count = count + 1
    if((grid[5]) != 0) count = count + 1
    if((grid[6]) != 0) count = count + 1
    if((grid[7]) != 0) count = count + 1
    if (( count != 0 )) {
        return true
    } else {return false}

}