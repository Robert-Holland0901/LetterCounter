const paragraph: string = 'A random paragraph can also be an excellent way for a writer to tackle writers block. Writing block can often happen due to being stuck with a current project that the writer is trying to complete. By inserting a completely random paragraph from which to begin, it can take down some of the issues that may have been causing the writers block in the first place.';

const letters: string [] = [];
for (
    let asciiCount: number = 97; asciiCount < 123; asciiCount++
){
    letters.push(String.fromCharCode(asciiCount));
}
const countNum = (paragraph : string) => {
    const count: number[] = []
    
    let counter: number = 0;

    for (let int in letters){
        for (let k = 0; k < paragraph.length; k++) {
           // console.log(letters[int] == paragraph[k])
            if (letters[int] == paragraph[k]){
                counter++;
            }
        }
        count.push(counter);
        counter =0;
    }
    console.log(letters, count)

}

countNum(paragraph);