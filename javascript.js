let a= [`Your self-worth is determined by you. You don't have to depend on someone telling you who you are.`,`Nothing is impossible. The word itself says 'I'm possible!'`,`Attitude is a little thing that makes a big difference.`,`To bring about change, you must not be afraid to take the first step. We will fail when we fail to try.`,`All our dreams can come true, if we have the courage to pursue them.`,`Don't sit down and wait for the opportunities to come. Get up and make them.`,`Champions keep playing until they get it right.`,`I am lucky that whatever fear I have inside me, my desire to win is always stronger.`,`You are never too old to set another goal or to dream a new dream.`,`It is during our darkest moments that we must focus to see the light.`,`Believe you can and you're halfway there.`,`Life shrinks or expands in proportion to one’s courage.`,`Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.`,`Try to be a rainbow in someone's cloud.`,`If you don't like the road you're walking, start paving another one.`,`Real change, enduring change, happens one step at a time.`,`All dreams are within reach. All you have to do is keep moving towards them.`,`It is never too late to be what you might have been.`,`When you put love out in the world it travels, and it can touch people and reach people in ways that we never even expected.`,`Give light and people will find the way.`,`It’s a toxic desire to try to be perfect. I realized later in life that the challenge is not to be perfect. It’s to be whole.`,`Vitality shows not only in the ability to persist but in the ability to start over.`,`The most common way people give up their power is by thinking they don’t have any.`,`Love yourself first and everything else falls into line`]


function generatequotes (a)
{   
    let index = Math.floor(Math.random() * a.length);
    let ele = document.body.firstElementChild.children[1]
    ele.innerHTML = `<h2>"${a[index]}"</h2>`;
}
console.log(a[2])
const generate =()=>{
    generatequotes (a)
}
