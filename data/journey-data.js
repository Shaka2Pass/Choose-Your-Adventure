

const stunbolt = {
    id: 'stunbolt',
    title: 'The Stunning',
    map: {
        top: '80%',
        left: '45%'
    },
    image: 'bolt-gun.jpg',
    audio: '',
    action: '',
    description: `As you trot, waddle, and plough along, forced along by ominous figures screaming obsenities in an alien tongue behind you, you arrive at a large metallic door. With a shrill squeal, reminiscent of your younglins call for help, the door rises revealing a  dark narrow cooridor beyond. Excriment, blood, and terror envelop your finely tuned sense of smell in a squal of odor. Never has a putrid combination of scents been so numbing or alerting. As you venture forth, you are confronted with a tall masked figure clad in a loose white skin. In his had he wields a long, cylindrical device. The bi-ped toses it back and forth between there dextrous upper paws skillfully. You are not quite sure what this thing does - but judging from the feces and blood spilled across the floor - you know it will be your demise. What do you do?
    `,  

    Choices: [{
        id: 'plead',
        description:'Plead for safe passage.',
        result: `In the pasture you were raised on, the tall bi-peds were kind to you when you called to them. If you were in pain they came to you and mended your wounds. You call out to the armed stranger, and plead with them to let you pass unharmed. The bi-ped in white begins to laugh. A deep, terrible laugh. He beckons you near. You approach, believing you will leave unharmed. Without a moments hesitation the monster, grabs your scruff, pulls you in close, and places the device to your head. As silent as the fox at midnight, device delivers a crushing blow to your skull. You loose 35 stamina. But you are not dead. You are dragged off further into the depths of the bi-ped den.`,
        stamina: -35,
        feed: 50,
    }, {
        id: 'run',
        description:'Turn and Run',
        result: `As you enter the narrow passage, you watch as herd ahead of you attempt to bargain with the baggy man in white. With the skill of the spider weaving it's web, bi-ped raises his weapon and delivers the coup de tat to each member of the proceeding party. That's no way to die. You turn and run with all your energy. Just before you escape through the tall door, the bi-ped prodding you forward levels a devastating kicks to your gut. You lose your breath and 20 stamina but manage to escape`,
        stamina: -20 ,
        feed: 50,
    }, {
        id: 'revolt',
        description:'Take your fate into your own hooves and revolt against your captors',
        result: `The sickening smell, the cacophonous noises and aggressive shoving from the bi-peds, and now this weapon wielding brute. Something is definitely not right. You know this will end badly. The large metal door you first entered through has shut. Time to make your stand, or die trying. You rush the firgure clad in white. You leap into the air, hooves and talons extended, and deliver a sharp blow to the bi-peds core area. You both tumble to the ground. The bi-ped weapon is thrown into the air, landing with unusual precision directly onto there left eye. The weapon activates and instantly stuns your tormenter. You escape by the hair of your chinny chin chin. You feel embolded by this move. Beyond the bi-ped is a trough of food, you take some feed, and push forward.`,
        stamina: -5,
        feed: 100,
    }
    ]
};

const gasChamber = {
    id: 'gasChamber',
    title: 'A Deadly Mist',
    map: {
        top: '80%',
        right: '45%'
    },
    image: 'gas-chamber.jpg',
    audio: '',
    action: '',
    description: `As you trot, waddle, and plough along, forced along by ominous figures screaming obsenities in an alien tongue behind you, you arrive at a large box. It looks a bit like the pen you were forced to sleep in as a youngling, but somehow you sense you won't wake up from your rest in this in this cold cell. As the large bi-ped kicks you into the chamber and closes the gate behind you, you begin to smell a sickly sweet smell. What do you do?
    `,  

    Choices: [{
        id: 'relax',
        description:`You take a deep breath, close your eyes and try to get some rest. This place feels aweful and you will need all of your stamina to venture on.`,
        result:`As the smell of sour apples becomes stronger, you start to feel sick right before you lose conciousness. The gas in the chamber is poisonous, and you slowly suffocate losing all your stamina`,
        stamina: -100,
        feed: 50,
    }, {
        id: 'kick',
        description:`Just as the bi-ped shoves you into the metal box, a fly lands on your hind quarters and bites hard. This place has been full of flies since you got here. In frustration you kick and claw hard behind you. Shoo fly!`,
        result: `The fly zips away unaffected. But you accidentally smack the bi-ped in the hard part of their lower leg. They bellow in pain and fall hard to the ground. You decide this is no place to rest and slip quietly beyond your downed captor. You feel strangely energized by your escape`,
        stamina: 60 ,
        feed: 50,
    }, {
        id: 'beg',
        description:`The smell eminating from the room can only mean one thing. Certain death. Or at the very least chemical castration. Both options don't sound very pleasant. You turn to the bi-ped behind you and with every ounce of heart you can must give them "The Look", a skill mastered as a youngling, the eyes plead for mothers milk and and affection. Mastered by doe and dog alike, in this house of horrors no attempt is beyond reproach. `,
        result: `The human bi-ped did not expect this turn of events and is caught off gaurd. Unbeknownst to you, they hate they have treated you with such malice and hate. They pull some feed from their pocket and give it you willingly. More suprisingly they set you free. They can't let leave, but at least you wont be taking a nap in this metal tomb.`,
        stamina: 0,
        feed: 75,
    }
    ]
};

const journey = [stunbolt, gasChamber, {
    id: 'pasture',
    title: 'The Final Pasture',
    map: {
        top: '80%',
        center: '45%'
    },
    image: '',
    audio: '',
    action: '',
    description: `Having escaped the dreaded factory farm, you've arrived at a lush green pasture. Filled with feed to gourge your belly (or bellies) and room to run, root, and peck. Just as you begin to envision your new life in this wonderous land you are confronted with a male human bi-bed. Vaguely familiar, you suddenly remember their name: Old. Mr. Mcdonald. He was the rough, but kind, old bi-ped that raised you. But now he holds a blast stick in his hand and he's looking to end your journey. He calls to you, and gives you three choices...`,

    Choices: [{
        id: 'roam',
        description:`Roam the pasture free.`,
        result:`Farmer McDonald allows you to live out the rest of your life, in peace on his farm. Not suprisingly, Mr. Mcdonald has a big heart and has welcomed back all of his animals. There is'nt much food to go around but pleanty of love.`,
        stamina: 100,
        feed: -10,
    }, {
        id: 'return',
        description:`Return, unwillingly to the factory of fear.`,
        result: `With a slow drawl and firm resolve, Old Farmer Mcdonald informs you you cannot leave. It's tough to understand his non animal language, but you get the gist. You have to return to the factory. As you trod back into the ominous building a new group of bi-peds arrives, dressed in black and wearing odd dark fur that covers their face.They grab you and gently put you in the back of their van. Hours later they deliver you to an even more beautiful and bountiful pasture. They shower you with food, love, and kindness. Ocassionaly you have to let youngling bi-peds pet and feed you, but it's better than the factory... `,
        stamina: 100 ,
        feed: 100,
    }, {
        id: 'confront',
        description:`Confront, Farmer Mc.Donald`,
        result: `This shall not stand. Old man McDonald will not stand in your way of freedom. Yelling with all your might you attempt to confront Mr. McDonald. He takes no pity. Raising his boom stick he fires off a single shot and a million tiny fires strike you head on ending your short miserable life.`,
        stamina: -150,
        feed: 50,
    }
    ]
};

export default journey;
   