let a= [
`When you have a dream, you’ve got to grab it and never let go.`,
`The most important thing is to enjoy your life—to be happy—it’s all that matters.`,
`Spread love everywhere you go. Let no one ever come without leaving happier.`,
`Be yourself; everyone else is already taken.`,
`The biggest adventure you can take is to live the life of your dreams.`,
`The only thing we have to fear is fear itself.`,
`I can accept failure, everyone fails at something. But I can’t accept not trying.`,
`You’ve got to be in it to win it.`,
`It does not matter how slowly you go, as long as you do not stop.`,
`Find out who you are and do it on purpose.`,
`For me, becoming isn’t about arriving somewhere or achieving a certain aim. I see it instead as forward motion, a means of evolving, a way to reach continuously toward a better self. The journey doesn’t end.`,
`Confident people have a way of carrying themselves that makes others attracted to them.`,
`If you can do what you do best and be happy, you are further along in life than most people.`,
`You can be everything. You can be the infinite amount of things that people are.`,
`Always go with your passions. Never ask yourself if it’s realistic or not.`,
`When you change your thoughts, remember to also change your world.`,
`The more you know who you are, and what you want, the less you let things upset you.`,
`By being yourself, you put something wonderful in the world that was not there before.`,
`Do one thing every day that scares you.`,
`It is never too late to be what you might have been.`,
`Find out who you are and be that person. That’s what your soul was put on this earth to be. Find the truth, live that truth, and everything else will come.`,
`When we are no longer able to change a situation, we are challenged to change ourselves.`,
`If you cannot do great things, do small things in a great way.`,
`Always do your best. What you plant now, you will harvest later.`,
`Get busy living or get busy dying.`,
`In three words I can sum up everything I’ve learned about life: It goes on.`,
`You can’t help what you feel, but you can help how you behave.`,
`No need to hurry. No need to sparkle. No need to be anybody but oneself.`,
`Promise me you’ll always remember: You’re braver than you believe, and stronger than you seem, and smarter than you think.`
    ,`Your self-worth is determined by you. You don't have to depend on someone telling you who you are.`,`Nothing is impossible. The word itself says 'I'm possible!'`,`Attitude is a little thing that makes a big difference.`,`To bring about change, you must not be afraid to take the first step. We will fail when we fail to try.`,`All our dreams can come true, if we have the courage to pursue them.`,`Don't sit down and wait for the opportunities to come. Get up and make them.`,`Champions keep playing until they get it right.`,`I am lucky that whatever fear I have inside me, my desire to win is always stronger.`,`You are never too old to set another goal or to dream a new dream.`,`It is during our darkest moments that we must focus to see the light.`,`Believe you can and you're halfway there.`,`Life shrinks or expands in proportion to one’s courage.`,`Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.`,`Try to be a rainbow in someone's cloud.`,`If you don't like the road you're walking, start paving another one.`,`Real change, enduring change, happens one step at a time.`,`All dreams are within reach. All you have to do is keep moving towards them.`,`It is never too late to be what you might have been.`,`When you put love out in the world it travels, and it can touch people and reach people in ways that we never even expected.`,`Give light and people will find the way.`,`It’s a toxic desire to try to be perfect. I realized later in life that the challenge is not to be perfect. It’s to be whole.`,`Vitality shows not only in the ability to persist but in the ability to start over.`,`The most common way people give up their power is by thinking they don’t have any.`,`Love yourself first and everything else falls into line`]


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
