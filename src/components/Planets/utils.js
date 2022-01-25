import Blue from '../Static/Background/Blue.jpg'
import Brown from '../Static/Background/Brown.jpg'
import DarkBlue from '../Static/Background/DarkBlue.jpg'
import Earth from '../Static/Background/Earth.jpg'
import Earth2 from '../Static/Background/Earth2.jpg'
import Pink from '../Static/Background/Pink.jpg'
import RadSand from '../Static/Background/RadSand.jpg'
import White from '../Static/Background/White.jpg'


export function Background(id){
    var resId
    var border
    var text
    var hover
    if ((id == 1)) {
        resId=RadSand
        border='#fff'
        text='#fff'
    }else if ((id == 2)) {
        resId=Blue
        border='#CCAA00'
        text='#CCAA00'
    }else if ((id == 3)) {
        resId=Earth
        border='#fff'
        text='#fff'
    }else if ((id == 4)) {
        resId=DarkBlue
        border='#fff'
        text='#fff'
    }else if ((id == 5)) {
        resId=Brown
        border='#111'
        text='#111'
    }else if ((id == 6)) {
        resId=Pink
        border='#fff'
        text='#fff'
    }else if ((id == 7)) {
        resId=Earth2
        border='#ACACAC'
        text='#FF9A15'
    }else if ((id == 8)) {
        resId=White
        border='#6E7F80'
        text='#EB4C42'
    }
    return { resId, border, text } ;
}