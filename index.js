
 const textArea = document.getElementById('textArea')
 

// bold font id 
const bold = document.getElementById('bold')
const italic = document.getElementById('italic')
const underLine = document.getElementById('underLine')


bold.onclick = () => {
    textArea.style.fontWeight = '800'
}
italic.onclick = () => {
    textArea.style.fontStyle = 'italic'
}
underLine.onclick = () => {
    textArea.style.textDecoration = 'underline'
}

// left right center part 

const left = document.getElementById('left')
const right = document.getElementById('right')
const center = document.getElementById('center')

left.onclick = () => {
    textArea.style.textAlign = 'left'
}
right.onclick = () => {
    textArea.style.textAlign = 'right'
}
center.onclick = () => {
    textArea.style.textAlign = 'center'
}

// color size font 

const size = document.getElementById('size')
const color = document.getElementById('color')
const font = document.getElementById('ff')

size.oninput = () => {
    textArea.style.fontSize = size.value + 'px';
}
color.oninput = () => {
    textArea.style.color = color.value;
     
}
font.oninput = () => {
    textArea.style.fontFamily = font.value;
     
}