/* ---------------------------------------------------------
   DRILL LIBRARY
   category: warmup | technical | ssg | cooldown
   focus:   dribbling | passing | shooting | defending | possession | fitness
   formation: grid | gates | circle | box | goal | zones | line | pairs
--------------------------------------------------------- */

export const DRILLS = [
  // WARM-UP
  {
    id: "w1", name: "Cone gate tag", category: "warmup", formation: "grid",
    ageMin: 7, ageMax: 19, skills: ["recreation", "travel", "academy"], focus: [],
    players: "8-20", equipment: ["Cones", "One ball per player"],
    summary: "A moving warm-up where every player dribbles freely in a grid and tries to pass through as many cone gates as possible before time runs out.",
    steps: [
      "Set up a 20x20 yard grid scattered with 8-10 pairs of cones spaced 2 yards apart to form gates.",
      "Every player starts with a ball and dribbles inside the grid.",
      "On the coach's signal, players try to dribble through as many different gates as they can in 90 seconds.",
      "Reset and run a second round, challenging players to beat their own gate count."
    ],
    points: ["Heads up while dribbling", "Use both feet to touch the ball", "Change speed, not just direction"],
    levelNotes: {
      recreation: "Keep score loosely and celebrate effort over count — this is about getting comfortable on the ball.",
      travel: "Add a rule that no gate can be used twice in a row to force scanning and decision-making.",
      academy: "Require alternating feet through each gate and add a defender or two who can only shadow, not tackle."
    }
  },
  {
    id: "w2", name: "Dynamic movement and ball taps", category: "warmup", formation: "line",
    ageMin: 7, ageMax: 19, skills: ["recreation", "travel", "academy"], focus: [],
    players: "6-24", equipment: ["Cones for lanes", "One ball per player"],
    summary: "Players move down a set of lanes performing a movement pattern out and a ball mastery move back, raising heart rate while waking up their footwork.",
    steps: [
      "Mark 4-6 parallel lanes about 15 yards long with cones.",
      "Players jog out doing high knees, then carioca, then backpedal, resting a few seconds between reps.",
      "On the way back each player dribbles using a specific move each round: inside taps, outside taps, sole rolls, then step-overs.",
      "Rotate through the full sequence twice."
    ],
    points: ["Stay light on the toes", "Keep the ball close on every touch", "Full effort on the movement reps"],
    levelNotes: {
      recreation: "Shorten the lanes and let players choose their favorite ball move on the way back.",
      travel: "Call out the move for everyone at once so the group stays together and pushes pace.",
      academy: "Add a change-of-direction cut at the halfway cone and increase to three ball-mastery moves per length."
    }
  },
  {
    id: "w3", name: "Rondo warm-up (3v1)", category: "warmup", formation: "circle",
    ageMin: 9, ageMax: 19, skills: ["recreation", "travel", "academy"], focus: [], styles: ["positional"],
    players: "8-16", equipment: ["Cones", "One ball"],
    summary: "Small groups of four keep the ball away from a single defender in a tight circle, waking up first touch and quick decision-making before the session's main work.",
    steps: [
      "Split the group into sets of four and mark an 8-yard circle for each.",
      "Three players stand on the circle passing the ball, one defender works in the middle to win it or force an error.",
      "Whoever gives the ball away, or the player whose pass was intercepted, switches into the middle.",
      "Rotate to a new group of four every 4-5 minutes so nobody is stuck defending too long."
    ],
    points: ["One or two touches only", "Support at an angle, not directly behind the ball", "Talk to the teammate on the ball"],
    levelNotes: {
      recreation: "Allow unlimited touches so every player can stay involved and succeed early.",
      travel: "Move to strict two-touch to build the passing tempo up before the main session.",
      academy: "Require one-touch once the group is warm, and add a neutral player to keep possession alive."
    }
  },
  {
    id: "w4", name: "Juggling and ball mastery circle", category: "warmup", formation: "circle",
    ageMin: 7, ageMax: 19, skills: ["recreation", "travel", "academy"], focus: [],
    players: "6-20", equipment: ["One ball per player"],
    summary: "A low-intensity, high-repetition warm-up where players work individually on touches and juggling in a shared space, building comfort on the ball before contact drills begin.",
    steps: [
      "Spread players out with a ball each inside a marked area.",
      "Start with 60 seconds of sole rolls and toe taps, staying in one spot.",
      "Move to individual juggling, counting the highest streak of the round.",
      "Finish with 60 seconds of freestyle dribbling weaving between teammates without touching another ball."
    ],
    points: ["Soft first touch", "Keep eyes up between touches when dribbling among others", "Compete against your own best count"],
    levelNotes: {
      recreation: "Let players juggle with a bounce allowed between touches so everyone can succeed.",
      travel: "No bounce allowed — count consecutive clean touches only.",
      academy: "Add weak-foot-only juggling for the final 30 seconds."
    }
  },

  {
    id: "w5", name: "Passing square warm-up", category: "warmup", formation: "box",
    ageMin: 8, ageMax: 19, skills: ["recreation", "travel", "academy"], focus: [],
    players: "8-20", equipment: ["Cones", "Balls"],
    summary: "Groups pass around and across a small square, an easy way to raise the heart rate while getting early touches on the ball with a purpose.",
    steps: [
      "Set up 4-yard squares, four players to a square, one ball each group.",
      "Players pass around the perimeter for two minutes, then switch to passing across the middle.",
      "Rotate which player starts the ball every 30 seconds to keep everyone involved.",
      "Finish with a quick game of first-to-ten-passes inside the square."
    ],
    points: ["Move to a new spot after every pass", "Communicate the target before passing", "Keep passes on the ground and firm"],
    levelNotes: {
      recreation: "Let the square be a bit larger so passes have more room to travel safely.",
      travel: "Add a one-touch requirement for the final minute.",
      academy: "Add a fifth player as a floating defender to press the square."
    }
  },
  {
    id: "w6", name: "Shark attack dribble warm-up", category: "warmup", formation: "grid",
    ageMin: 7, ageMax: 10, skills: ["recreation", "travel"], focus: [],
    players: "8-20", equipment: ["Cones"],
    summary: "A classic, high-energy game where dribbling 'fish' try to cross a grid without a 'shark' stealing their ball — a fun way to get young players moving and touching the ball early.",
    steps: [
      "Mark a 20x15 yard grid. One or two players start in the middle as sharks, without a ball.",
      "Every other player starts on one end line with a ball and tries to dribble to the other side without losing it to a shark.",
      "Any player who loses their ball becomes a shark for the next round.",
      "Play 4-5 rounds until only a couple of 'fish' remain, then reset."
    ],
    points: ["Keep the ball close when a shark is near", "Change direction to avoid pressure", "Have fun — this is about touches, not perfection"],
    levelNotes: {
      recreation: "Keep it playful and let eliminated players re-join after a round or two.",
      travel: "Shrink the grid slightly each round to raise the difficulty as numbers thin out."
    }
  },
  {
    id: "w7", name: "Partner mirror warm-up", category: "warmup", formation: "pairs",
    ageMin: 9, ageMax: 19, skills: ["recreation", "travel", "academy"], focus: [],
    players: "8-24", equipment: ["None"],
    summary: "Partners face off and mirror each other's lateral movement without a ball, raising the heart rate while priming the footwork used in defending and agility work later in the session.",
    steps: [
      "Pair players up facing each other, about 3 yards apart.",
      "One partner leads with side-to-side, forward, and backward movement; the other mirrors as closely as possible.",
      "Switch leaders every 30 seconds.",
      "Run 3-4 total rounds, increasing the speed of the leader each time."
    ],
    points: ["Stay on the balls of the feet", "Keep the eyes on the partner's hips, not their feet", "Match direction changes instantly"],
    levelNotes: {
      recreation: "Keep the movement slow and exaggerated so everyone can keep up.",
      academy: "Add a reaction element where the leader claps to signal an instant sprint away."
    }
  },

  // DRIBBLING
  {
    id: "d1", name: "Cone maze dribbling", category: "technical", formation: "grid",
    ageMin: 7, ageMax: 12, skills: ["recreation", "travel", "academy"], focus: ["dribbling"],
    players: "6-16", equipment: ["Cones", "One ball per player"],
    summary: "Players weave a ball through a winding line of cones, building close control and the confidence to look up while dribbling in traffic.",
    steps: [
      "Lay out 6-8 cones in a zig-zag line, 2 yards apart.",
      "Each player dribbles through the full maze using the inside and outside of the foot to change direction at every cone.",
      "Time each run and have players try to beat their own best time on the second and third attempt.",
      "Add a second, parallel maze so players can race a partner once they're comfortable."
    ],
    points: ["Small touches close to the cones", "Use both feet through the maze", "Keep the head up between cones, not staring at the ball"],
    levelNotes: {
      recreation: "Skip the stopwatch at first — let players focus purely on getting through cleanly.",
      travel: "Introduce timed runs and a head-to-head race format.",
      academy: "Tighten cone spacing to 1.5 yards and require a specific move (step-over, scissor) at every third cone."
    }
  },
  {
    id: "d2", name: "1v1 gates duel", category: "technical", formation: "gates",
    ageMin: 8, ageMax: 19, skills: ["recreation", "travel", "academy"], focus: ["dribbling"],
    players: "8-20", equipment: ["Cones"],
    summary: "Paired players face off in a small grid scattered with cone gates, each trying to dribble the ball through any gate while their opponent tries to do the same and prevent theirs.",
    steps: [
      "Mark a 15x15 yard grid with 4-5 cone gates scattered inside.",
      "Pair players up, each with a ball, inside the grid.",
      "On the whistle, each player tries to dribble through as many gates as possible while also using their body to block an opponent from using 'their' gate.",
      "Play 60-90 second rounds and rotate partners between rounds."
    ],
    points: ["Shield the ball with your body when opponents are close", "Change pace to create separation", "Keep composure under pressure"],
    levelNotes: {
      recreation: "Play with more gates than players so success comes easily and often.",
      travel: "Reduce gates until they're scarce enough that players have to compete for space.",
      academy: "Make it a true 1v1 — one gate to attack, one to defend, direct matchups only."
    }
  },
  {
    id: "d3", name: "Change of direction ladder", category: "technical", formation: "line",
    ageMin: 11, ageMax: 19, skills: ["travel", "academy"], focus: ["dribbling", "fitness"],
    players: "6-16", equipment: ["Cones", "One ball per player"],
    summary: "A repetition-based dribbling circuit that pairs sharp changes of direction with game-realistic touches, sharpening the moves players use to beat a defender in tight spaces.",
    steps: [
      "Set up a line of 5 cones, 3 yards apart, in a straight channel.",
      "Players dribble to each cone and execute a cut (inside hook, outside hook, or step-over) before continuing to the next.",
      "Run through the full line, then jog back to the start for the next rep.",
      "Rotate the required move each set: hooks, then step-overs, then a player's choice combo."
    ],
    points: ["Plant foot points where you want to go", "Accelerate away after every cut", "Keep the ball within one stride of the body"],
    levelNotes: {
      travel: "Cap it at three moves per pass through the line to keep it manageable.",
      academy: "Add a coach or teammate applying light pressure from behind to simulate a recovering defender."
    }
  },

  {
    id: "d4", name: "Two-touch cone turns", category: "technical", formation: "line",
    ageMin: 7, ageMax: 10, skills: ["recreation", "travel"], focus: ["dribbling"],
    players: "6-16", equipment: ["Cones", "Balls"],
    summary: "Players dribble to a single cone, use exactly two touches to turn away from it, and dribble back — a simple, repeatable way to introduce the turning moves used to escape pressure.",
    steps: [
      "Set a cone 8 yards from the start line for each player or pair of players.",
      "Player dribbles to the cone, uses one touch to stop or redirect the ball and a second touch to turn away, then dribbles back.",
      "Rotate through a few different turns: drag-back, inside hook, sole roll.",
      "Run 4-5 reps per turn type."
    ],
    points: ["Get close to the cone before turning, like a defender is there", "Use the first touch to set up the turn, not just stop the ball", "Explode away after the second touch"],
    levelNotes: {
      recreation: "Demonstrate one turn at a time and let players master it before adding the next.",
      travel: "Add a coach standing at the cone as a passive pressure cue."
    }
  },
  {
    id: "d5", name: "1v1 end zone dribbling", category: "technical", formation: "gates",
    ageMin: 13, ageMax: 19, skills: ["travel", "academy"], focus: ["dribbling"],
    players: "8-18", equipment: ["Cones"],
    summary: "An attacker tries to dribble into either of two end zones while a defender denies access to both, a game-realistic test of the moves and decision-making needed to beat a real opponent.",
    steps: [
      "Mark a 15x10 yard area with a scoring end zone at each end.",
      "The attacker starts in the middle with the ball; the defender starts between the attacker and the zones.",
      "The attacker tries to dribble into either end zone under control; the defender tries to stop them or win the ball.",
      "Play to 3 successful entries, then swap roles."
    ],
    points: ["Attack the defender's weaker side", "Use a change of pace, not just a move, to create separation", "Protect the ball with your body once past the defender"],
    levelNotes: {
      travel: "Allow the attacker a two-touch head start to build confidence early.",
      academy: "Add a shot clock (6 seconds) to force quicker, more decisive attacking."
    }
  },
  {
    id: "d6", name: "Ball mastery skill moves circuit", category: "technical", formation: "circle",
    ageMin: 8, ageMax: 19, skills: ["recreation", "travel", "academy"], focus: ["dribbling"],
    players: "6-20", equipment: ["One ball per player"],
    summary: "A stationed circuit where players cycle through individual ball-mastery moves — step-overs, scissors, rolls, and cuts — building the foot skills that show up inside every dribbling situation.",
    steps: [
      "Set up 4-5 stations, each with a card or coach demonstrating one move: step-over, scissor, sole roll, Cruyff turn, drag-back.",
      "Players spend 90 seconds at each station repeating the move in place or over a short 3-yard distance.",
      "Rotate stations on a whistle until every player has visited each one.",
      "Finish with a freestyle minute where players combine two or more moves in a row."
    ],
    points: ["Practice at a controlled pace before adding speed", "Use both feet, not just the strong foot", "Keep the ball within touching distance throughout"],
    levelNotes: {
      recreation: "Focus on just two or three moves so the session doesn't feel overwhelming.",
      academy: "Require the move to be finished at full speed with a burst away from the ball afterward."
    }
  },
  {
    id: "d7", name: "Speed dribble sprint", category: "technical", formation: "line",
    ageMin: 12, ageMax: 19, skills: ["travel", "academy"], focus: ["dribbling", "fitness"],
    players: "6-18", equipment: ["Cones", "Balls"],
    summary: "Players push the ball into open space and sprint onto it in a straight line, training the speed dribbling needed to break away on the counter-attack.",
    steps: [
      "Mark a 25-30 yard straight channel.",
      "Player pushes the ball 5-7 yards ahead with a firm touch, then sprints onto it before it stops.",
      "Repeat the push-and-sprint pattern down the full length of the channel.",
      "Jog back to recover and repeat for 4-5 total reps."
    ],
    points: ["Push the ball into space you can sprint into, not sideways", "Keep the touches long when space is open, short when it isn't", "Full sprint speed between touches"],
    levelNotes: {
      travel: "Keep the touches shorter and more frequent while the skill develops.",
      academy: "Add a defender chasing from a step behind to simulate a real recovery run."
    }
  },

  // PASSING
  {
    id: "p1", name: "Triangle passing", category: "technical", formation: "box",
    ageMin: 7, ageMax: 12, skills: ["recreation", "travel", "academy"], focus: ["passing"],
    players: "6-15", equipment: ["Cones"],
    summary: "Groups of three pass the ball around a triangle, building the basic mechanics of an accurate pass and a controlled first touch.",
    steps: [
      "Set three cones 8-10 yards apart in a triangle for each group of three players.",
      "Players pass around the triangle in one direction, controlling with one touch and passing with the next.",
      "After two minutes, switch direction, then switch to passing across the middle of the triangle.",
      "Finish with a one-touch round for the players who are ready for it."
    ],
    points: ["Pass to the far foot so the receiver can turn or move easily", "Use the inside of the foot for accuracy", "Call for the ball before it arrives"],
    levelNotes: {
      recreation: "Let players use as many touches as they need to control the ball comfortably.",
      travel: "Move to a strict two-touch limit once the group finds a rhythm.",
      academy: "Add a passive defender in the middle of the triangle to add a decision on every pass."
    }
  },
  {
    id: "p2", name: "Passing gates", category: "technical", formation: "gates",
    ageMin: 8, ageMax: 19, skills: ["recreation", "travel", "academy"], focus: ["passing"],
    players: "8-20", equipment: ["Cones", "Balls"],
    summary: "Pairs pass the ball back and forth through a series of small gates spread across the field, rewarding weight and accuracy over pure power.",
    steps: [
      "Scatter 6-8 cone gates, each 2 yards wide, across a 25x25 yard area.",
      "Pair players up with one ball and have them move together, passing the ball through as many different gates as they can.",
      "Award a point every time a pass travels cleanly through a gate without being touched by a cone.",
      "After 3 minutes, switch partners and reset the count."
    ],
    points: ["Strike through the middle of the ball for a flat pass", "Follow the pass and move to support", "Pick the gate before you receive, not after"],
    levelNotes: {
      recreation: "Move the gates closer together so early success comes quickly.",
      travel: "Require players to one-touch a pass whenever the ball arrives at a good angle.",
      academy: "Add a shared time limit across the whole group and total the team's gate count for a competitive finish."
    }
  },
  {
    id: "p3", name: "Rondo 4v2 possession", category: "technical", formation: "circle",
    ageMin: 10, ageMax: 19, skills: ["travel", "academy"], focus: ["passing", "possession"], styles: ["positional"],
    players: "12-18", equipment: ["Cones", "Bibs"],
    summary: "Four attackers keep the ball from two defenders inside a tight grid, forcing quick, accurate passing under real pressure.",
    steps: [
      "Mark a 10x10 yard grid for each group of six players.",
      "Four players spread around the edges, two defenders work in the middle.",
      "Attackers try to complete as many passes as possible; a defender who wins the ball swaps in for whoever made the error.",
      "Rotate defenders every 3-4 minutes regardless so everyone gets both roles."
    ],
    points: ["Open your body shape to see the whole grid before receiving", "Move immediately after passing to offer a new angle", "Play away from pressure, not into it"],
    levelNotes: {
      travel: "Allow two touches to give players time to find the right pass.",
      academy: "Restrict to one touch once the group is consistently completing 10+ passes in a row."
    }
  },
  {
    id: "p4", name: "Wall pass combination play", category: "technical", formation: "grid",
    ageMin: 13, ageMax: 19, skills: ["travel", "academy"], focus: ["passing"], styles: ["combination"],
    players: "9-18", equipment: ["Cones", "Small goals or target cones"],
    summary: "Groups of three practice the give-and-go, learning to pass, sprint into space, and receive the return ball on the move — the foundation of combination play.",
    steps: [
      "Set up a channel roughly 30 yards long with a target (small goal or cone gate) at the far end.",
      "Player A passes to Player B, who is positioned as the 'wall,' then immediately sprints past.",
      "Player B returns the ball into the space Player A is running into with one touch.",
      "Player A finishes at the target; rotate roles and repeat down the channel."
    ],
    points: ["The wall player sets the ball first-time, not off two touches", "Sprint the moment the pass is played, don't wait to see it arrive", "Weight the return pass into space, not to feet"],
    levelNotes: {
      travel: "Slow it down and rehearse the pattern without a defender first.",
      academy: "Add a passive, then active, defender trying to step in front of the return pass."
    }
  },

  {
    id: "p5", name: "Long pass accuracy channels", category: "technical", formation: "line",
    ageMin: 12, ageMax: 19, skills: ["travel", "academy"], focus: ["passing"],
    players: "8-18", equipment: ["Cones", "Balls"],
    summary: "Players strike longer diagonal passes into marked target channels, building the range and accuracy needed to switch play or find a runner in behind.",
    steps: [
      "Mark two target channels, 5 yards wide, 25-30 yards apart on a diagonal.",
      "Players take turns striking a pass from one channel into the other for a partner to control.",
      "Award a point for any pass that lands inside the target channel under control.",
      "Switch striking and receiving roles every 6-8 reps."
    ],
    points: ["Strike through the bottom half of the ball for lift and distance", "Follow through toward the target", "Receiver should check their shoulder before the pass arrives"],
    levelNotes: {
      travel: "Move the channels closer together while technique is still developing.",
      academy: "Add a one-touch finish or control requirement once the pass arrives."
    }
  },
  {
    id: "p6", name: "Give and go grid", category: "technical", formation: "grid",
    ageMin: 8, ageMax: 12, skills: ["recreation", "travel"], focus: ["passing"],
    players: "9-18", equipment: ["Cones", "Balls"],
    summary: "Groups of three rotate through a simple give-and-go pattern inside a grid, an easy first introduction to combination passing for younger players.",
    steps: [
      "Set up a 12x12 yard grid for each group of three.",
      "Player A passes to Player B and immediately jogs to a new open space.",
      "Player B finds Player A (or the third player) with the next pass.",
      "Keep the ball moving for two minutes, then rotate which player starts."
    ],
    points: ["Move right after passing, don't stand still", "Call for the ball with your voice and a hand signal", "Pass to space the teammate is moving into"],
    levelNotes: {
      recreation: "Let players use as many touches as needed and keep the mood light.",
      travel: "Add a two-touch limit once the pattern is understood."
    }
  },
  {
    id: "p7", name: "First touch and pass under pressure", category: "technical", formation: "box",
    ageMin: 13, ageMax: 19, skills: ["academy"], focus: ["passing"],
    players: "9-15", equipment: ["Cones", "Bibs", "Balls"],
    summary: "A receiving player is passed the ball while a defender closes down from behind, forcing a quick, well-directed first touch that sets up the next pass under real pressure.",
    steps: [
      "Set up a triangle with a passer, a receiver, and a defender starting behind the receiver.",
      "The passer plays the ball to the receiver as the defender begins closing down.",
      "The receiver must take a first touch that moves the ball away from the defender, then complete a pass to a third target.",
      "Rotate roles every 5 reps so each player defends, receives, and passes."
    ],
    points: ["Check shoulders before the ball arrives to know where pressure is coming from", "Angle the first touch away from the defender, not straight ahead", "Play quickly once received — don't take an extra touch under pressure"],
    levelNotes: {
      academy: "Add a time limit for the receiver to play the next pass, increasing pressure to decide fast."
    }
  },
  {
    id: "p8", name: "Circle passing with movement", category: "technical", formation: "circle",
    ageMin: 7, ageMax: 10, skills: ["recreation"], focus: ["passing"],
    players: "8-16", equipment: ["Cones", "Balls"],
    summary: "Players stand in a circle and pass across to a teammate before following their pass into the new spot, keeping everyone moving and involved.",
    steps: [
      "Form a circle of 6-8 players with one or two balls in play.",
      "A player passes across the circle to any teammate, then jogs to take that player's spot.",
      "The receiving player controls, picks a new target, and repeats the pattern.",
      "Add a second ball once the group has the pattern down to keep everyone on their toes."
    ],
    points: ["Look up before passing to pick a clear target", "Call the receiver's name before passing", "Jog, don't wander, to the new spot"],
    levelNotes: {
      recreation: "Keep it to one ball at first and celebrate clean passes and clear calls."
    }
  },

  // SHOOTING
  {
    id: "s1", name: "Shooting gates", category: "technical", formation: "goal",
    ageMin: 7, ageMax: 12, skills: ["recreation", "travel", "academy"], focus: ["shooting"],
    players: "6-16", equipment: ["Cones", "Goal", "Balls"],
    summary: "Players dribble through a gate before striking on goal, linking a touch in stride to a controlled shot rather than shooting from a standstill.",
    steps: [
      "Set a cone gate 12-15 yards from goal.",
      "Players line up, dribble through the gate, and strike at goal within two touches of clearing it.",
      "Rotate through the line quickly, collecting balls for the next player.",
      "After each player has had 4-5 shots, move the gate to a new angle."
    ],
    points: ["Plant foot alongside the ball, pointed at the target", "Strike through the laces for power, or the inside of the foot for placement", "Pick a corner before you strike"],
    levelNotes: {
      recreation: "Keep the goal open with no keeper so every player gets to see success.",
      travel: "Add a goalkeeper and call out a target corner before each shot.",
      academy: "Add a recovering defender starting from behind the gate to add real pressure to the shot."
    }
  },
  {
    id: "s2", name: "1v1 to goal", category: "technical", formation: "goal",
    ageMin: 9, ageMax: 19, skills: ["recreation", "travel", "academy"], focus: ["shooting", "dribbling"],
    players: "8-18", equipment: ["Cones", "Goal", "Balls"],
    summary: "An attacker and defender face off from the top of the box, combining the season's dribbling and finishing work into one live, competitive rep.",
    steps: [
      "Set up a 20x15 yard area in front of a goal with a keeper.",
      "The attacker starts with the ball at the top; the defender starts a few yards off and can close down once the attacker touches the ball.",
      "Play until a goal, a save, or the ball goes out of the area, then swap roles.",
      "Rotate pairs every 4-5 reps so players face different opponents."
    ],
    points: ["Attack at an angle that opens the goal, not straight at the defender", "Change speed to unbalance the defender before the finish", "Defenders should show the attacker away from goal, not dive in"],
    levelNotes: {
      recreation: "Give the attacker a two-touch head start before the defender can engage.",
      academy: "Add a time limit (6-8 seconds) to force decisive attacking play."
    }
  },
  {
    id: "s3", name: "Finishing lines", category: "technical", formation: "goal",
    ageMin: 10, ageMax: 19, skills: ["recreation", "travel", "academy"], focus: ["shooting"],
    players: "8-20", equipment: ["Cones", "Goal", "Balls"],
    summary: "A service-and-finish drill where a coach or teammate delivers a cross or a through ball and the striker must finish first-time or in two touches.",
    steps: [
      "Set up two lines: a server line at the byline or edge of the box, and a finisher line at the top of the box.",
      "The server plays a cross or a driven pass into the box for the finisher to attack.",
      "Finishers should aim to score in one or two touches, then join the server line while the next pair goes.",
      "After 8-10 reps, swap the two lines so everyone practices serving and finishing."
    ],
    points: ["Attack the ball rather than waiting for it to arrive", "Get the body across the ball to keep the shot low", "Communicate the type of service before it's played"],
    levelNotes: {
      recreation: "Slow the service down and let finishers take an extra touch to settle.",
      academy: "Add a defender jogging back to contest the finish and require first-time contact only."
    }
  },
  {
    id: "s4", name: "Far post finishing combos", category: "technical", formation: "goal",
    ageMin: 14, ageMax: 19, skills: ["travel", "academy"], focus: ["shooting", "passing"], styles: ["combination"],
    players: "9-18", equipment: ["Cones", "Goal", "Balls"],
    summary: "A three-player combination that builds a wide overlap, a cutback or cross, and a first-time finish at the far post — a pattern lifted straight from the match.",
    steps: [
      "Position a wide player near the byline, a central passer at the top of the box, and a finisher making a run to the far post.",
      "The central passer plays the ball wide; the wide player takes a touch to the byline.",
      "The wide player cuts the ball back or crosses low across the face of goal.",
      "The finisher arrives late to strike first-time; rotate roles after every three reps."
    ],
    points: ["The wide player's first touch should take them toward goal, not away from it", "Time the run to the far post so you arrive as the ball is delivered, not before", "Finish across your body for a low, placed strike"],
    levelNotes: {
      travel: "Walk through the pattern without pressure until the timing clicks.",
      academy: "Add a goalkeeper and a recovering center back to make the far-post run and finish fully live."
    }
  },

  {
    id: "s5", name: "Volley and half-volley finishing", category: "technical", formation: "goal",
    ageMin: 14, ageMax: 19, skills: ["academy"], focus: ["shooting"],
    players: "6-14", equipment: ["Goal", "Balls"],
    summary: "A coach or partner tosses or drops the ball for the striker to finish out of the air, a demanding technical rep for older, more advanced players.",
    steps: [
      "Position a server 10-12 yards from goal with a supply of balls.",
      "The server tosses or drops the ball into the striker's path.",
      "The striker finishes on the volley or half-volley, aiming for a specific corner.",
      "Rotate server and striker every 6-8 reps."
    ],
    points: ["Keep the body over the ball to avoid skying the shot", "Small final step to get in position early", "Watch the ball all the way onto the foot"],
    levelNotes: {
      academy: "Add a goalkeeper and vary the toss height and angle each rep to remove predictability."
    }
  },
  {
    id: "s6", name: "Rebound finishing", category: "technical", formation: "goal",
    ageMin: 9, ageMax: 14, skills: ["recreation", "travel"], focus: ["shooting"],
    players: "8-18", equipment: ["Goal", "Balls"],
    summary: "Players shoot from distance and immediately follow their shot to finish any rebound, building the instinct to attack the goal after a save or block.",
    steps: [
      "Line players up 16-18 yards from goal with a keeper or a rebound wall in place.",
      "Each player strikes on goal, then sprints in immediately to attack any loose ball.",
      "If there's no rebound, the player jogs back to the line and the next player goes.",
      "Rotate through the line for 8-10 total reps per player."
    ],
    points: ["Sprint toward goal the instant you shoot, don't admire it", "Attack the rebound with the first touch, don't wait to set up again", "Stay low and balanced to finish off-balance rebounds"],
    levelNotes: {
      recreation: "Use a rebound wall or wide keeper so second-chance shots come often.",
      travel: "Add a passive defender who can also chase the rebound to add competition."
    }
  },
  {
    id: "s7", name: "Free kick technique", category: "technical", formation: "goal",
    ageMin: 12, ageMax: 19, skills: ["travel", "academy"], focus: ["shooting"],
    players: "6-16", equipment: ["Goal", "Balls", "Cones for a wall"],
    summary: "Players work individually on striking technique for direct free kicks, focusing on the plant foot, contact point, and follow-through that create bend and power.",
    steps: [
      "Set up balls 18-20 yards from goal, centrally and from a slight angle.",
      "Each player takes 4-5 attempts, focusing on a consistent run-up and plant foot placement.",
      "Add a cone wall once technique looks consistent to simulate a real free kick.",
      "Rotate through all players for two full rounds."
    ],
    points: ["Plant foot beside the ball, pointed at the target", "Strike with the instep for bend, laces for power", "Follow through in the direction you want the ball to travel"],
    levelNotes: {
      travel: "Keep the wall out at first and focus purely on strike quality.",
      academy: "Add a live goalkeeper and score attempts against a real wall for full match realism."
    }
  },

  // DEFENDING
  {
    id: "def1", name: "1v1 defending shape", category: "technical", formation: "pairs",
    ageMin: 8, ageMax: 19, skills: ["recreation", "travel", "academy"], focus: ["defending"], styles: ["physical"],
    players: "6-18", equipment: ["Cones"],
    summary: "Paired players work on the defender's body shape and footwork, learning to delay an attacker and show them into a low-danger area instead of diving in.",
    steps: [
      "Mark a 10-yard channel for each pair with a small target line at each end.",
      "The attacker starts with the ball and tries to dribble past the defender to the target line.",
      "The defender stays on the balls of their feet, shows the attacker to one side, and delays without tackling for the first few reps.",
      "After 5 reps, allow the defender to tackle when the moment is right; swap roles."
    ],
    points: ["Stay low with a wide base, don't lunge", "Show the attacker away from goal or toward the sideline", "Match the attacker's speed rather than committing early"],
    levelNotes: {
      recreation: "Focus entirely on footwork and body shape — no winner needed yet.",
      academy: "Time each rep and track the defender's success rate at forcing the attacker wide."
    }
  },
  {
    id: "def2", name: "Jockey and contain", category: "technical", formation: "line",
    ageMin: 9, ageMax: 19, skills: ["recreation", "travel", "academy"], focus: ["defending"],
    players: "6-20", equipment: ["Cones"],
    summary: "A footwork-focused drill where defenders shuffle and backpedal to stay goal-side of a moving attacker without a ball in play, isolating pure defensive movement.",
    steps: [
      "Set up a 10-yard channel with a coach or attacking player moving side to side without a ball.",
      "The defender mirrors every movement, staying an arm's length away and facing the attacker.",
      "Run 20-second reps, resting fully between each so the movement stays sharp.",
      "Progress to the attacker carrying a ball, changing pace to test the defender's footwork under real conditions."
    ],
    points: ["Small, quick steps rather than crossing the feet", "Stay square to the attacker, hips open", "Keep the head still to track the ball or the attacker's hips"],
    levelNotes: {
      recreation: "Keep reps short and playful — races to mirror the coach's movement work well here.",
      academy: "Add a second attacker to force the defender to recognize when to jockey and when to press."
    }
  },
  {
    id: "def3", name: "Defensive shadow pressing", category: "technical", formation: "zones",
    ageMin: 12, ageMax: 19, skills: ["travel", "academy"], focus: ["defending"],
    players: "10-18", equipment: ["Cones", "Bibs"],
    summary: "A small group works together to press and cut off passing lanes as a unit, translating individual defending into coordinated team pressure.",
    steps: [
      "Set up a 20x20 yard grid with four attackers on the outside and three defenders inside.",
      "Attackers try to complete passes across the grid; defenders work together to press the ball and block the nearest passing lanes.",
      "Rotate a defender out for an attacker every 3 minutes.",
      "Reset and repeat with defenders trying to beat their previous interception count."
    ],
    points: ["Nearest defender presses the ball, others shift to cover passing lanes", "Communicate who is pressing and who is covering", "Win the ball, don't just contain it, once support arrives"],
    levelNotes: {
      travel: "Start with defenders only covering lanes, adding the press once shape is understood.",
      academy: "Add a rule that a completed pass through the middle third resets the attackers' pass count to zero, rewarding tight defensive shape."
    }
  },
  {
    id: "def4", name: "Recover and delay race", category: "technical", formation: "line",
    ageMin: 7, ageMax: 12, skills: ["recreation", "travel"], focus: ["defending", "fitness"],
    players: "8-20", equipment: ["Cones"],
    summary: "A fun, race-based introduction to defensive recovery runs, teaching young players to sprint back into position after losing the ball.",
    steps: [
      "Set up a start cone and a 'defensive position' cone 15 yards away at an angle.",
      "On the coach's signal, players sprint from the start cone to the defensive cone as if recovering after losing possession.",
      "Time each player or run it as pairs racing side by side.",
      "Repeat 4-5 times, varying the angle of the recovery run each time."
    ],
    points: ["Sprint the recovery, don't jog", "Get goal-side before slowing down", "Turn and face the play once in position"],
    levelNotes: {
      recreation: "Keep it a game with cheering and simple times, not a fitness test.",
      travel: "Add a ball for the defender to win or delay once they arrive in position."
    }
  },

  {
    id: "def5", name: "Team shape shadow defending", category: "technical", formation: "zones",
    ageMin: 14, ageMax: 19, skills: ["academy"], focus: ["defending"], styles: ["physical"],
    players: "10-16", equipment: ["Cones", "Bibs"],
    summary: "A unit of defenders moves together without opposition, shifting and shadowing as a coach moves a ball around the edge of the area to rehearse collective shape before adding pressure.",
    steps: [
      "Set up a back line or midfield line of 3-4 defenders facing a coach with a ball on the perimeter of a marked zone.",
      "As the coach moves the ball side to side, the defending line shifts together, staying compact and connected.",
      "Stop periodically to check spacing and body shape, then repeat the movement pattern.",
      "Progress to two coaches passing the ball to test the line's ability to shift quickly between angles."
    ],
    points: ["Move as a unit, not as individuals", "Nearest defender to the ball sets the line's depth", "Communicate constantly to stay connected"],
    levelNotes: {
      academy: "Add a passive attacking line to give the defenders real bodies to track once shape is understood."
    }
  },
  {
    id: "def6", name: "Tackle timing gates", category: "technical", formation: "gates",
    ageMin: 9, ageMax: 13, skills: ["recreation", "travel"], focus: ["defending"],
    players: "8-16", equipment: ["Cones"],
    summary: "A defender waits at a gate and must time a tackle or interception as an attacker dribbles through, building the patience and timing needed to win the ball cleanly rather than diving in early.",
    steps: [
      "Set up a cone gate with a defender standing just behind it.",
      "An attacker dribbles toward the gate from 10 yards away.",
      "The defender must wait until the attacker is within a step or two before attempting to poke or block the ball, not before.",
      "Rotate roles after every 4-5 attempts."
    ],
    points: ["Wait for the right moment, don't lunge early", "Attack the ball with the near foot", "Stay balanced so a missed tackle doesn't take you out of the play"],
    levelNotes: {
      recreation: "Slow the attacker's dribble speed at first so the defender can find the timing.",
      travel: "Add a two-touch limit for the attacker to sharpen the defender's read."
    }
  },
  {
    id: "def7", name: "2v2 defending to end line", category: "technical", formation: "zones",
    ageMin: 11, ageMax: 19, skills: ["travel", "academy"], focus: ["defending"],
    players: "8-16", equipment: ["Cones"],
    summary: "Two defenders work together to stop two attackers from reaching an end line, training the cover-and-press partnership that underpins real team defending.",
    steps: [
      "Mark a 20x15 yard area with a scoring end line for the attacking pair.",
      "Two attackers try to combine and dribble or pass their way across the end line; two defenders work together to stop them.",
      "Play to 3 stops or 3 successful crossings, then rotate in a new pair.",
      "Reset possession each time it goes out of bounds and keep score across rounds."
    ],
    points: ["One defender presses the ball, the other covers the space behind", "Talk constantly to coordinate who presses and who covers", "Show attackers away from the middle of the area"],
    levelNotes: {
      travel: "Start with the defenders a yard closer to build early confidence in the partnership.",
      academy: "Add a neutral third attacker to test the defending pair's shape against a numbers disadvantage."
    }
  },

  // FITNESS / AGILITY
  {
    id: "f1", name: "Agility ladder circuit", category: "technical", formation: "line",
    ageMin: 8, ageMax: 19, skills: ["recreation", "travel", "academy"], focus: ["fitness"],
    players: "6-20", equipment: ["Agility ladders or chalk lines"],
    summary: "A footwork circuit using agility ladders to build the quick, coordinated steps that show up in every change of direction on the field.",
    steps: [
      "Lay out 2-4 agility ladders side by side.",
      "Demonstrate one pattern at a time: two feet per box, lateral in-in-out, or single-leg hops.",
      "Players move through the ladder at a controlled pace focused on clean footwork, then jog back.",
      "Cycle through 3-4 patterns, 2 reps each."
    ],
    points: ["Quality of footwork over raw speed", "Stay on the balls of the feet", "Pump the arms to match the leg rhythm"],
    levelNotes: {
      recreation: "Demonstrate each pattern slowly and let players go at their own pace.",
      academy: "Add a ball to dribble alongside the ladder for a combined footwork and touch challenge."
    }
  },
  {
    id: "f2", name: "Shuttle sprint relay", category: "technical", formation: "line",
    ageMin: 9, ageMax: 19, skills: ["recreation", "travel", "academy"], focus: ["fitness"],
    players: "8-24", equipment: ["Cones"],
    summary: "Teams race in a shuttle format, building repeat sprint speed and the fun, competitive edge that keeps conditioning work from feeling like a chore.",
    steps: [
      "Set cones at 5, 10, and 15 yards from a start line, and split the group into teams of 4-5.",
      "The first player sprints to the 5-yard cone and back, then the 10-yard cone and back, then the 15-yard cone and back, tagging the next teammate.",
      "Continue until every player on the team has gone.",
      "Rest fully between rounds and run 2-3 total rounds."
    ],
    points: ["Touch the ground at each cone before turning", "Full sprint, not a jog, on every leg", "Cheer teammates on between reps"],
    levelNotes: {
      recreation: "Shorten the distances and keep team sizes small so waiting time stays minimal.",
      academy: "Extend to a fourth cone at 20 yards and track times to show improvement over the season."
    }
  },
  {
    id: "f3", name: "Cone weave speed course", category: "technical", formation: "grid",
    ageMin: 10, ageMax: 19, skills: ["travel", "academy"], focus: ["fitness", "dribbling"],
    players: "6-18", equipment: ["Cones", "Balls (optional)"],
    summary: "A short, high-intensity course combining sprints, cuts, and backpedals that mirrors the movement demands of a match, run with or without a ball.",
    steps: [
      "Set up a course combining a straight sprint, a weave through 4 cones, and a backpedal section, totaling about 30 yards.",
      "Players complete the course at full effort, resting 45-60 seconds between attempts.",
      "Run 4-5 total reps per player.",
      "For older or more advanced groups, repeat the course while dribbling a ball to combine fitness with technical demand."
    ],
    points: ["Full effort on every rep, quality over quantity of reps", "Change direction with a low center of gravity", "Full recovery between reps keeps the intensity high"],
    levelNotes: {
      travel: "Run the course without a ball to keep the focus on pure movement.",
      academy: "Alternate reps with and without the ball to build fitness that transfers directly to game speed on the ball."
    }
  },

  {
    id: "f4", name: "Reaction sprint starts", category: "technical", formation: "line",
    ageMin: 8, ageMax: 19, skills: ["recreation", "travel", "academy"], focus: ["fitness"],
    players: "8-24", equipment: ["Cones"],
    summary: "Players start from different body positions and sprint on a visual or verbal cue, sharpening the first-step quickness that matters more in games than top-end speed.",
    steps: [
      "Line players up on a start line in groups of 4-6.",
      "Have them start from standing, seated, lying face-down, or facing backward.",
      "On a hand signal or call, players react and sprint 10-15 yards as fast as possible.",
      "Rest fully between reps and cycle through 3-4 different starting positions."
    ],
    points: ["React to the signal, don't anticipate it", "Drive the arms hard on the first three steps", "Full recovery between reps keeps quality high"],
    levelNotes: {
      recreation: "Turn it into a simple racing game with partners for extra motivation.",
      academy: "Add a ball to react onto and dribble away with for the final few reps."
    }
  },
  {
    id: "f5", name: "Small-space quickness circuit", category: "technical", formation: "grid",
    ageMin: 10, ageMax: 19, skills: ["travel", "academy"], focus: ["fitness"],
    players: "6-18", equipment: ["Cones"],
    summary: "A tight circuit of short, sharp changes of direction packed into a small area, mirroring the quick, repeated bursts players make during a real match.",
    steps: [
      "Mark a 5x5 yard square with a cone at each corner and one in the center.",
      "Players sprint from the center to each corner and back, touching each cone before returning to the middle.",
      "Complete all four corners as one rep, then rest 30-45 seconds.",
      "Run 4-5 total reps."
    ],
    points: ["Stay low and quick on every touch of the cone", "Explode out of each direction change", "Keep the head up throughout, not looking down at the cones"],
    levelNotes: {
      travel: "Extend the square slightly and allow a bit more rest between reps.",
      academy: "Add a ball for the final two reps, dribbling to each cone instead of sprinting empty-handed."
    }
  },

  // SSG / POSSESSION
  {
    id: "ssg1", name: "4v4 small-sided game", category: "ssg", formation: "box",
    ageMin: 7, ageMax: 19, skills: ["recreation", "travel", "academy"], focus: ["dribbling", "passing", "shooting", "defending", "possession", "fitness"], formats: ["7v7", "9v9", "11v11"],
    players: "8-16", equipment: ["Cones or small goals", "Bibs"],
    summary: "A small-sided game with no goalkeepers and small goals, maximizing every player's touches and forcing the technical and tactical ideas from earlier in the session into a live, game-realistic setting.",
    steps: [
      "Mark a 30x20 yard field with small goals (or cone gates) at each end, no goalkeepers.",
      "Split into teams of four and play regular small-sided rules — kick-ins instead of throw-ins keep the game flowing.",
      "Play 4-6 minute games, rotating in any extra players between games.",
      "Coach from the sideline with brief, specific reminders tied to the session's theme rather than stopping play."
    ],
    points: ["Apply today's theme in the game, don't just play for fun", "Look for the moment to use the skill just practiced", "Communicate constantly with teammates"],
    levelNotes: {
      recreation: "Let the game flow with minimal coaching interruptions — this is the reward part of practice.",
      travel: "Freeze the game briefly once or twice to highlight a moment connected to the session's focus.",
      academy: "Add a condition (must complete three passes before scoring, or a two-touch limit) that reinforces the day's theme."
    }
  },
  {
    id: "ssg2", name: "Possession box", category: "ssg", formation: "box",
    ageMin: 9, ageMax: 19, skills: ["recreation", "travel", "academy"], focus: ["possession", "passing"], formats: ["9v9", "11v11"],
    players: "10-18", equipment: ["Cones", "Bibs"],
    summary: "One team tries to keep the ball inside a grid against a smaller, high-pressure defending team, rewarding quick combination play and support angles.",
    steps: [
      "Mark a 25x25 yard grid.",
      "Set up a numbers-up possession game, such as 6v4, inside the grid.",
      "The larger team scores a point for every 6-8 consecutive passes; the smaller team scores by winning the ball and keeping it themselves for 3 passes.",
      "Swap which team has the extra numbers every 3-4 minutes."
    ],
    points: ["Spread out to make the grid as big as possible", "Play out of pressure early rather than under it", "Defenders press with a purpose, cutting off the easiest pass"],
    levelNotes: {
      recreation: "Play with a bigger numbers advantage (like 7v3) so possession comes easily and confidence builds.",
      academy: "Move to an even or near-even numbers game (5v4) to raise the pressure and decision speed."
    }
  },
  {
    id: "ssg3", name: "3-zone transition game", category: "ssg", formation: "zones",
    ageMin: 11, ageMax: 19, skills: ["travel", "academy"], focus: ["defending", "possession", "fitness"], formats: ["9v9", "11v11"],
    players: "10-16", equipment: ["Cones", "Bibs", "Small goals"],
    summary: "The field is split into three zones, and teams must play the ball through each zone to score, rewarding quick transitions between attacking and defending.",
    steps: [
      "Divide a 40x25 yard field into three even zones with cones, with a small goal at each end.",
      "Two teams play normally, but a goal only counts if the ball has touched all three zones during that possession.",
      "Play 5-6 minute periods, resetting possession counts each time a goal is scored.",
      "Coach the transition moment: what the team does in the first three seconds after winning or losing the ball."
    ],
    points: ["React immediately the instant possession changes", "Don't rush the ball through zones — build it with control", "Nearest player to the ball defends first, others recover shape"],
    levelNotes: {
      travel: "Relax the three-zone rule to two zones if the group is still learning to build out of the back.",
      academy: "Add a rule that the zone the ball was won in cannot be used again on the same possession, forcing switches of play."
    }
  },
  {
    id: "ssg4", name: "Positional rondo (7v3)", category: "ssg", formation: "circle",
    ageMin: 12, ageMax: 19, skills: ["academy"], focus: ["possession", "passing"], styles: ["positional"], formats: ["11v11"],
    players: "10-14", equipment: ["Cones", "Bibs"],
    summary: "A large possession rondo where attackers hold specific positions around a grid, training the spacing and patience of a real build-out under pressure.",
    steps: [
      "Mark a 20x20 yard grid with attackers positioned around the perimeter and inside as a 'free' player.",
      "Three defenders work together inside to press and win the ball.",
      "Attackers must maintain their spacing and use the free player to switch the point of attack.",
      "Rotate defenders in for attackers every 3-4 minutes, or when the group reaches a target number of consecutive passes."
    ],
    points: ["Maintain width and depth in the shape, don't bunch together", "Use the free player to escape pressure and switch sides", "Scan before receiving to know the next pass already"],
    levelNotes: {
      academy: "Add a two-touch limit once the group is comfortable, and track consecutive completed passes as a team target."
    }
  },

  {
    id: "ssg5", name: "3v3 to four goals", category: "ssg", formation: "box",
    ageMin: 7, ageMax: 14, skills: ["recreation", "travel", "academy"], focus: ["dribbling", "shooting", "passing"], formats: ["7v7", "9v9"],
    players: "6-12", equipment: ["Cones", "Bibs"],
    summary: "Two small teams attack four mini-goals at once, rewarding players who can dribble at pace, spot the open goal, and finish or combine to create one.",
    steps: [
      "Mark a 25x20 yard area with a small goal or cone gate in each corner.",
      "Play 3v3 with each team able to score in either of the two goals on the opponent's end.",
      "Play 5-6 minute games, encouraging players to switch the point of attack when one goal is covered.",
      "Rotate in any extra players between games."
    ],
    points: ["Scan for the open goal before committing to a run", "Combine with a teammate when your goal is blocked", "Take players on 1v1 when the space is there"],
    levelNotes: {
      recreation: "Keep the goals wide and close together so scoring chances come often.",
      academy: "Narrow the goals slightly and add a condition like 'must beat a defender before shooting.'"
    }
  },
  {
    id: "ssg6", name: "6v6 possession to target players", category: "ssg", formation: "box",
    ageMin: 13, ageMax: 19, skills: ["travel", "academy"], focus: ["possession", "passing", "defending"], formats: ["9v9", "11v11"],
    players: "12-16", equipment: ["Cones", "Bibs"],
    summary: "Two full teams play possession with a fixed target player at each end, training the patience to build play and the timing to find the target under pressure.",
    steps: [
      "Mark a 40x30 yard field with a neutral target player standing in a small end zone at each end.",
      "Teams score by playing the ball into their target player, who plays it back first-time to restart the attack.",
      "Play 6-8 minute periods, rotating the target player role regularly.",
      "Coach the moments before the ball reaches the target: spacing, timing of the run, and support angles."
    ],
    points: ["Build patiently rather than rushing the ball forward", "Time runs to the target so passing lanes stay open", "Defend as a connected unit, not as individuals"],
    levelNotes: {
      travel: "Allow the target player two touches to make the pattern easier to execute.",
      academy: "Restrict the target player to one touch and add a defender who can contest them."
    }
  },
  {
    id: "ssg7", name: "Two-touch league game", category: "ssg", formation: "box",
    ageMin: 10, ageMax: 16, skills: ["travel", "academy"], focus: ["passing", "possession"], formats: ["7v7", "9v9", "11v11"],
    players: "10-16", equipment: ["Cones", "Bibs", "Small goals"],
    summary: "A regular small-sided game with a two-touch restriction, forcing faster decision-making and better first touches without changing anything else about the game.",
    steps: [
      "Set up a standard small-sided field with small goals, no goalkeepers.",
      "Play normal rules, but every player is limited to two touches maximum before passing or shooting.",
      "Play 5-6 minute periods, calling out the restriction if it's forgotten early on.",
      "Remove the restriction for the final few minutes to let the improved habits show in free play."
    ],
    points: ["Get the head up before the ball arrives to plan the next touch", "First touch should set up the second, not waste it", "Move immediately to support once you've passed"],
    levelNotes: {
      travel: "Allow a third touch when a player is under no pressure at all.",
      academy: "Drop to a strict one-touch requirement for the final two minutes as a bonus challenge."
    }
  },

  // COOLDOWN
  {
    id: "c1", name: "Static stretch circle", category: "cooldown", formation: "circle",
    ageMin: 7, ageMax: 19, skills: ["recreation", "travel", "academy"], focus: [],
    players: "6-24", equipment: ["None"],
    summary: "The team gathers in a circle for a guided stretch, bringing the heart rate down and closing the session with a shared, calm moment.",
    steps: [
      "Bring the whole group into a circle, standing with enough space to stretch freely.",
      "Lead the group through quads, hamstrings, calves, and hip flexors, holding each stretch for 15-20 seconds per side.",
      "Encourage slow, controlled breathing throughout.",
      "Finish with a moment of quiet before wrapping up."
    ],
    points: ["Hold each stretch without bouncing", "Breathe slowly and evenly", "Stretch both sides evenly"],
    levelNotes: {
      recreation: "Keep it short and light, and let the energy stay upbeat.",
      academy: "Extend hold times slightly and add a brief foam roll or self-myofascial release for players who have access to equipment."
    }
  },
  {
    id: "c2", name: "Walk and talk debrief", category: "cooldown", formation: "circle",
    ageMin: 11, ageMax: 19, skills: ["travel", "academy"], focus: [],
    players: "6-24", equipment: ["None"],
    summary: "Players walk a slow lap while the coach reviews the session's theme and asks a few players to reflect on what they noticed, connecting today's work to the next game.",
    steps: [
      "Have the group walk a slow, easy lap of the field together as a cooldown.",
      "Revisit the session's main theme in a sentence or two.",
      "Ask two or three players what they felt worked well or found challenging.",
      "Close with one clear takeaway players can carry into the next game or session."
    ],
    points: ["Keep the tone reflective, not a lecture", "Invite players to speak rather than filling the silence yourself", "Tie the takeaway directly back to today's theme"],
    levelNotes: {
      travel: "Keep questions simple and specific to one moment from the session.",
      academy: "Ask players to connect today's theme to a specific moment from their last match."
    }
  },
  {
    id: "c3", name: "Team huddle and stretch", category: "cooldown", formation: "circle",
    ageMin: 7, ageMax: 10, skills: ["recreation"], focus: [],
    players: "6-20", equipment: ["None"],
    summary: "A short, upbeat stretch and huddle designed for young players, closing the session on a positive note with a quick shout-out to the group's effort.",
    steps: [
      "Bring the group into a tight circle, arms around shoulders if the team is comfortable with it.",
      "Lead a quick, playful stretch: reach for the sky, touch your toes, big arm circles.",
      "Ask the group to shout out one thing they did well today.",
      "Close with a team cheer or chant."
    ],
    points: ["Keep the energy positive and light", "Make sure every player gets a mention or a chance to speak", "End on time so pickup stays smooth for parents"],
    levelNotes: {
      recreation: "Keep it under two minutes — short and fun beats long and structured at this age."
    }
  },

  // TRAINING PHILOSOPHY — POSITIONAL PLAY (Barcelona-inspired)
  {
    id: "bp1", name: "Positional grid (juego de posición)", category: "technical", formation: "box",
    ageMin: 10, ageMax: 19, skills: ["travel", "academy"], focus: ["possession", "passing"], styles: ["positional"],
    players: "10-16", equipment: ["Cones", "Bibs"],
    summary: "A possession game where every player is assigned a fixed zone, the same structured-spacing idea Barcelona's academy is famous for — the ball moves, but the shape and the passing lanes never collapse.",
    steps: [
      "Divide a 30x20 yard area into a 3x2 grid of zones with cones, and assign one player to each zone.",
      "Players may move freely within their own zone but not into a neighbor's zone.",
      "The team in possession tries to string together passes by finding the open zone, using width and depth to keep lanes open.",
      "A defending team (or two floating defenders) tries to intercept; rotate zones or roles every 4-5 minutes."
    ],
    points: ["Keep the zones full — don't abandon your space to chase the ball", "Look for the diagonal pass before the safe sideways one", "Receive on the half-turn so you can play forward in one motion"],
    levelNotes: {
      travel: "Allow two touches and keep zones a bit larger while the spacing concept is new.",
      academy: "Move to a one- or two-touch limit and add a rule that the ball can't return to the same zone twice in a row, forcing the team to keep circulating it."
    }
  },
  {
    id: "bp2", name: "Five-second press trigger", category: "technical", formation: "box",
    ageMin: 11, ageMax: 19, skills: ["travel", "academy"], focus: ["possession", "defending"], styles: ["positional"],
    players: "10-16", equipment: ["Cones", "Bibs"],
    summary: "Built around the same idea that made Barcelona's possession game so hard to play against: the moment the ball is lost, the nearest players swarm it instantly, aiming to win it back before the opponent can settle.",
    steps: [
      "Play a possession game (4v4 or 5v5) in a 25x20 yard grid.",
      "The instant possession is lost, start a visible 5-second count out loud.",
      "The team that lost the ball must press with 2-3 players immediately, trying to win it back before the count ends.",
      "If the ball isn't won back in 5 seconds, the pressing team resets into its normal defensive shape instead of chasing further."
    ],
    points: ["The nearest player presses the ball, others cut off the easiest passing lanes", "Full sprint for the first five seconds, then recover shape with discipline", "Communicate loudly so the whole group presses together, not just one player"],
    levelNotes: {
      travel: "Extend the count to 6-7 seconds so younger legs can execute the idea successfully.",
      academy: "Tighten to a true 5 seconds and track how often the group wins the ball back within the window."
    }
  },

  // TRAINING PHILOSOPHY — COMBINATION PLAY (Arsenal-inspired)
  {
    id: "ar1", name: "Third-man combination play", category: "technical", formation: "grid",
    ageMin: 12, ageMax: 19, skills: ["travel", "academy"], focus: ["passing"], styles: ["combination"],
    players: "9-15", equipment: ["Cones"],
    summary: "The quick, layered combination play associated with modern Arsenal sides — a pass, a disguised lay-off, and a third player breaking into space to receive the final ball behind the defense.",
    steps: [
      "Set up three players in a triangle roughly 15 yards apart, with a target zone or small goal beyond them.",
      "Player A passes to Player B; as the ball travels, Player C times a run in behind.",
      "Player B lays the ball off first-time into the path of Player C's run rather than controlling it.",
      "Player C finishes at the target; rotate positions after every 4-5 reps so everyone plays all three roles."
    ],
    points: ["Player B's first touch is the pass — no extra touch to control it", "Player C's run should be disguised, starting late so the defense can't track it early", "The whole pattern should take under three seconds from first pass to finish"],
    levelNotes: {
      travel: "Walk the pattern through slowly first without a defender so the timing clicks.",
      academy: "Add a recovering defender who starts even with Player B to make the timing of the run fully live."
    }
  },
  {
    id: "ar2", name: "Overlap and underlap channel", category: "technical", formation: "gates",
    ageMin: 12, ageMax: 19, skills: ["travel", "academy"], focus: ["passing", "dribbling"], styles: ["combination"],
    players: "9-18", equipment: ["Cones"],
    summary: "A wide combination pattern built on the overlapping and underlapping runs that create the extra passing option in behind a defense — a staple of quick, attacking wing play.",
    steps: [
      "Set up a wide channel about 25 yards long with a wide player and a central player at the start.",
      "The central player dribbles toward the wide player; the wide player either overlaps (runs outside) or underlaps (runs inside), calling for the pass.",
      "The player on the ball plays into the run with a first-time or one-touch pass.",
      "The receiver drives into the space and crosses or cuts back to a target; rotate roles every few reps."
    ],
    points: ["Time the run so it starts just as the ball carrier looks up, not before", "Play the pass into the space ahead of the run, not to the runner's feet", "Vary overlap and underlap so defenders can't predict which run is coming"],
    levelNotes: {
      travel: "Practice the overlap and underlap as separate patterns before combining them in the same rep.",
      academy: "Add a passive defender tracking the central player to make the decision of which run to make fully realistic."
    }
  },

  // TRAINING PHILOSOPHY — PRESS AND PHYSICAL DUELS (Premier League-inspired)
  {
    id: "epl1", name: "Duel box: win the physical battle", category: "technical", formation: "pairs",
    ageMin: 10, ageMax: 19, skills: ["travel", "academy"], focus: ["defending"], styles: ["physical"],
    players: "8-18", equipment: ["Cones"],
    summary: "A no-nonsense 1v1 battle for the ball in a tight space, built to develop the physical, competitive edge associated with English top-flight defending — full commitment, every duel.",
    steps: [
      "Mark a 6x6 yard box for each pair of players.",
      "A coach rolls or tosses the ball into the box between two players who must fight to win and keep control of it.",
      "Play to first clean control for 3 seconds, or the ball leaving the box, then reset with a new ball.",
      "Run 6-8 reps per pair, rotating opponents regularly so players face different styles."
    ],
    points: ["Get your body between the opponent and the ball early", "Use a strong, balanced stance — don't get knocked off the ball", "Compete for every duel at full effort, but stay within the rules of fair, safe contact"],
    levelNotes: {
      travel: "Emphasize legal shoulder-to-shoulder contact and stopping cleanly on the whistle.",
      academy: "Add a small reward or running consequence for the losing player each round to raise the competitive intensity."
    }
  },
  {
    id: "epl2", name: "Second ball battle", category: "technical", formation: "grid",
    ageMin: 11, ageMax: 19, skills: ["travel", "academy"], focus: ["defending", "fitness"], styles: ["physical"],
    players: "8-16", equipment: ["Cones", "Balls"],
    summary: "A coach launches a long ball for two players to compete for the loose second ball after the initial header or clearance, the scrappy, high-intensity moment that decides a lot of English top-flight matches.",
    steps: [
      "Mark a 15x15 yard area with two players facing a coach with a supply of balls.",
      "The coach launches a long ball or a driven pass into the area for both players to contest.",
      "Whoever wins the first contact tries to control and drive the ball out of the area; the other player closes down immediately to contest the second ball.",
      "Reset and repeat for 8-10 total reps, rotating in new pairs."
    ],
    points: ["Attack the ball in the air with full commitment", "Anticipate where the loose ball will fall rather than reacting late", "Stay compact and low after any header to be first to the second ball"],
    levelNotes: {
      travel: "Use a lighter, rolled service at first to build technique before adding aerial duels.",
      academy: "Add a third player as an immediate presser once the first ball is won, simulating a real second-phase transition."
    }
  },
  {
    id: "epl3", name: "Press and win it back SSG", category: "ssg", formation: "box",
    ageMin: 11, ageMax: 19, skills: ["travel", "academy"], focus: ["defending", "possession", "fitness"], styles: ["physical"], formats: ["9v9", "11v11"],
    players: "10-16", equipment: ["Cones", "Bibs", "Small goals"],
    summary: "A high-intensity small-sided game where losing the ball means an immediate, coordinated press rather than falling back — the aggressive, front-foot defending style associated with the English top flight.",
    steps: [
      "Set up a standard small-sided field with small goals, no goalkeepers.",
      "Play normal rules, but the team that just lost the ball must press to win it back before it crosses the halfway line, or concede a point.",
      "Play 5-6 minute periods, coaching full-sprint pressing in the first moments after a turnover.",
      "Reward the pressing team with a point for winning the ball back inside their own attacking third."
    ],
    points: ["React to losing the ball instantly — the first five yards of the sprint matter most", "Cut off the easiest pass first, don't just chase the ball carrier", "Every challenge is won with full physical commitment, not a half effort"],
    levelNotes: {
      travel: "Extend the halfway-line rule to give the pressing team more time to succeed early on.",
      academy: "Add a rule that a failed press leads directly into defending a 2v1 or 3v2 break, raising the cost of a lazy press."
    }
  },

  // WARM-UP (additional)
  {
    id: "w8", name: "Figure-8 dribble warm-up", category: "warmup", formation: "circle",
    ageMin: 7, ageMax: 19, skills: ["recreation", "travel", "academy"], focus: [],
    players: "6-20", equipment: ["Cones", "One ball per player"],
    summary: "Players weave a continuous figure-8 pattern around two cones, an easy repeatable warm-up that builds close control and a rhythm before the session ramps up.",
    steps: [
      "Set two cones 6 yards apart for each player or pair.",
      "Players dribble a figure-8 loop around both cones continuously for 45 seconds.",
      "Switch direction of the loop for the next 45-second set.",
      "Finish with a weak-foot-only round for players ready for the challenge."
    ],
    points: ["Small touches on the turns", "Keep the head up on the straight sections", "Both directions, both feet"],
    levelNotes: {
      recreation: "Widen the cone spacing so the turns are gentler while confidence builds.",
      travel: "Time each round and challenge players to keep the ball inside a tighter loop.",
      academy: "Add a defender shadowing from outside the loop without engaging, just to add visual pressure."
    }
  },
  {
    id: "w9", name: "Passing diamond warm-up", category: "warmup", formation: "box",
    ageMin: 9, ageMax: 19, skills: ["recreation", "travel", "academy"], focus: [],
    players: "8-20", equipment: ["Cones", "Balls"],
    summary: "Groups of four pass around a diamond shape, an early-session way to get passing rhythm and movement going before the main technical work begins.",
    steps: [
      "Set four cones in a diamond, 8 yards apart, one player per cone.",
      "Pass around the diamond in order for two minutes, following the pass into the next spot.",
      "Switch to passing across the diamond's short diagonal for two minutes.",
      "Finish with a group target of ten consecutive clean passes."
    ],
    points: ["Move immediately after passing", "Communicate before the ball arrives", "Firm, accurate passes on the ground"],
    levelNotes: {
      recreation: "Let players take a settling touch before every pass.",
      travel: "Introduce a two-touch limit once the shape is comfortable.",
      academy: "Add a defender in the middle trying to intercept the diagonal passes."
    }
  },

  // DRIBBLING (additional)
  {
    id: "d8", name: "Sole roll control course", category: "technical", formation: "line",
    ageMin: 7, ageMax: 11, skills: ["recreation", "travel"], focus: ["dribbling"],
    players: "6-16", equipment: ["Cones", "Balls"],
    summary: "Players guide the ball through a simple course using only sole rolls, isolating one foundational touch so it becomes automatic before combining it with other moves.",
    steps: [
      "Set up a channel of 5 cones, 3 yards apart.",
      "Players move the ball from cone to cone using only sole rolls — no other touches allowed.",
      "Time each run and repeat 3-4 times.",
      "Finish with a freestyle round mixing sole rolls with normal dribbling."
    ],
    points: ["Keep the sole light on the ball, don't stamp", "Stay balanced over the ball", "Small, controlled rolls rather than big pushes"],
    levelNotes: {
      recreation: "Let players go at their own pace — this is about the feel of the touch, not speed.",
      travel: "Add a stopwatch and a friendly head-to-head format."
    }
  },
  {
    id: "d9", name: "1v1 end-to-end dribble battle", category: "technical", formation: "zones",
    ageMin: 10, ageMax: 16, skills: ["travel", "academy"], focus: ["dribbling"],
    players: "8-16", equipment: ["Cones"],
    summary: "Two players start at opposite ends of a channel and try to dribble past each other to the far end, a simple but demanding test of close control under direct pressure.",
    steps: [
      "Mark a 12x8 yard channel with a target line at each end.",
      "Both players start with a ball at opposite ends and dribble toward the other's target line.",
      "When they meet in the middle, each must find a way past the other while protecting their own ball.",
      "Play to first player across the far line, then reset and rotate opponents."
    ],
    points: ["Shield the ball with the body when passing close to an opponent", "Change pace to create the gap", "Stay calm in the crowded moment in the middle"],
    levelNotes: {
      travel: "Widen the channel slightly to make the first few reps more manageable.",
      academy: "Narrow the channel and add a time limit to force quicker decisions."
    }
  },
  {
    id: "d10", name: "Scissor move repetition drill", category: "technical", formation: "line",
    ageMin: 10, ageMax: 19, skills: ["travel", "academy"], focus: ["dribbling"],
    players: "6-18", equipment: ["Cones", "Balls"],
    summary: "Focused repetition on the scissor move at a cone, building the fake-and-go pattern that creates separation from a defender in a 1v1 moment.",
    steps: [
      "Set a single cone for each player, 8 yards from the start line.",
      "Player dribbles to the cone, performs a scissor move (stepping over the ball without touching it), then accelerates away at an angle.",
      "Return to the start and repeat, alternating which foot leads the scissor.",
      "Run 6-8 total reps, increasing speed as the move becomes comfortable."
    ],
    points: ["Sell the fake with the hips, not just the foot", "Keep the standing leg balanced through the move", "Explode away immediately after"],
    levelNotes: {
      travel: "Walk through the move slowly first before adding any speed.",
      academy: "Add a passive defender at the cone to give the move a real target to beat."
    }
  },
  {
    id: "d11", name: "Dribble and freeze", category: "technical", formation: "grid",
    ageMin: 7, ageMax: 10, skills: ["recreation", "travel"], focus: ["dribbling"],
    players: "8-20", equipment: ["Cones"],
    summary: "A reaction-based dribbling game where players freeze in place with the ball under close control the instant the coach calls it, building the habit of keeping the ball tight at all times.",
    steps: [
      "Mark a grid and have every player dribble freely inside it.",
      "On the coach's call of 'freeze,' every player must stop with the ball dead under their foot within one second.",
      "Check a few players' control each round and reset with 'go.'",
      "Play 4-5 rounds, occasionally calling 'freeze' twice in quick succession to keep it sharp."
    ],
    points: ["Keep the ball within a foot of your body at all times", "React the instant you hear the call", "Balance over the ball when frozen"],
    levelNotes: {
      recreation: "Make a game of it — last player to freeze cleanly does a silly forfeit like five jumping jacks."
    }
  },
  {
    id: "d12", name: "Tight-space turns box", category: "technical", formation: "box",
    ageMin: 11, ageMax: 19, skills: ["travel", "academy"], focus: ["dribbling"],
    players: "8-16", equipment: ["Cones", "Bibs"],
    summary: "Several players dribble inside a small shared box, forced to turn away from traffic constantly — a demanding way to build the close control needed in congested midfield areas.",
    steps: [
      "Mark an 8x8 yard box and put 4-5 players inside, each with a ball.",
      "Players dribble freely, using turns to avoid contact with teammates and the edges of the box.",
      "After a minute, call out a specific turn everyone must use for the next round: inside hook, drag-back, Cruyff.",
      "Rotate players in and out to keep the box density high."
    ],
    points: ["Scan constantly for open space", "Use the turn early, don't wait until you're trapped", "Stay light on the feet to react quickly"],
    levelNotes: {
      travel: "Use a slightly larger box while players adjust to the crowding.",
      academy: "Shrink the box and add a rule that any ball-to-ball contact restarts that player's count."
    }
  },
  {
    id: "d13", name: "Dribbling relay tournament", category: "technical", formation: "line",
    ageMin: 8, ageMax: 14, skills: ["recreation", "travel"], focus: ["dribbling"],
    players: "8-20", equipment: ["Cones"],
    summary: "Teams race through a dribbling course in a bracket-style tournament, turning close-control practice into a competitive, high-energy team event.",
    steps: [
      "Set up 3-4 identical short dribbling courses (weave through 4-5 cones).",
      "Split into teams of 3-4 and run a relay, each player completing the course before tagging the next.",
      "Track times or simply first team finished; run bracket rounds if there are enough teams.",
      "Crown a winning team after 2-3 rounds."
    ],
    points: ["Full speed without losing control", "Clean handoffs between teammates", "Cheer teammates on between reps"],
    levelNotes: {
      recreation: "Keep courses short and simple so every player finishes with confidence.",
      travel: "Add a required move (step-over, scissor) at one cone in the course."
    }
  },

  // PASSING (additional)
  {
    id: "p9", name: "One-touch finishing square", category: "technical", formation: "box",
    ageMin: 13, ageMax: 19, skills: ["academy"], focus: ["passing"],
    players: "8-16", equipment: ["Cones", "Bibs"],
    summary: "A fast-tempo square possession game restricted to strictly one touch, sharpening the speed of thought and technique needed to play at the top of the sport.",
    steps: [
      "Mark a 12x12 yard square with four players on the corners and two in the middle as defenders.",
      "Corner players must play every ball first-time; no second touch allowed.",
      "Defenders press to force an error or a poor first-time pass.",
      "Rotate defenders every 3 minutes regardless of turnovers."
    ],
    points: ["Body shape open before the ball arrives", "Decide where the next pass goes before receiving", "Weight the pass so it's catchable first-time"],
    levelNotes: {
      academy: "Track consecutive one-touch passes as a team target and reset the count after a poor pass."
    }
  },
  {
    id: "p10", name: "Cross-field switch passing", category: "technical", formation: "line",
    ageMin: 13, ageMax: 19, skills: ["travel", "academy"], focus: ["passing"],
    players: "8-16", equipment: ["Cones", "Balls"],
    summary: "Players practice switching the point of attack with a long, accurate diagonal pass across the width of the field — a skill that unlocks space against a compact defense.",
    steps: [
      "Set up two target zones on opposite sides of the field, 35-40 yards apart.",
      "One line of players strikes diagonal switches from one zone to a receiver in the other.",
      "The receiver controls and returns the ball down the line, then rotates to the back.",
      "Switch striking sides after every 8 reps."
    ],
    points: ["Open the body to strike across the ball for the diagonal flight", "Aim to arrive at the receiver's front foot", "Follow the pass to support after switching"],
    levelNotes: {
      travel: "Shorten the distance while accuracy is still developing.",
      academy: "Add a receiver who must control and finish at a small goal within two touches of the switch."
    }
  },
  {
    id: "p11", name: "Passing under time pressure", category: "technical", formation: "box",
    ageMin: 11, ageMax: 17, skills: ["travel", "academy"], focus: ["passing"],
    players: "9-16", equipment: ["Cones", "Bibs"],
    summary: "A possession game with a visible countdown clock, training players to keep their passing quality high even as the pressure and pace increase.",
    steps: [
      "Set up a 15x15 yard grid with a 5v2 or 6v3 possession game inside.",
      "Start a visible countdown from 30 seconds; the possession team must hit a pass target before time expires.",
      "If they succeed, reset the clock and continue; if not, rotate a defender in.",
      "Gradually shorten the countdown as the group improves."
    ],
    points: ["Play quickly but don't rush into a bad pass", "Communicate loudly to speed up decisions", "Keep the shape wide so options stay open under pressure"],
    levelNotes: {
      travel: "Start with a generous 45-second window and a lower pass target.",
      academy: "Drop to a 20-second window with a higher pass target for a genuinely demanding version."
    }
  },
  {
    id: "p12", name: "Two-ball rondo", category: "technical", formation: "circle",
    ageMin: 12, ageMax: 19, skills: ["academy"], focus: ["passing", "possession"],
    players: "10-16", equipment: ["Cones", "Bibs"],
    summary: "A standard rondo with a second ball introduced mid-drill, forcing constant scanning and communication since two plays are live in the grid at once.",
    steps: [
      "Set up a normal rondo (5v2 or 6v2) in a 12x12 yard grid.",
      "Play normally for two minutes to establish rhythm.",
      "Introduce a second ball into the grid without stopping play.",
      "Play for 90 seconds with both balls live, then remove one and reset."
    ],
    points: ["Know where both balls are at all times", "Communicate which ball you're tracking", "Stay switched on even when not directly involved in a play"],
    levelNotes: {
      academy: "Add a rule that defenders can win either ball, doubling their chances and raising the intensity."
    }
  },
  {
    id: "p13", name: "Support angle passing triangle", category: "technical", formation: "box",
    ageMin: 9, ageMax: 13, skills: ["recreation", "travel"], focus: ["passing"],
    players: "6-15", equipment: ["Cones"],
    summary: "A guided passing drill that teaches young players to find a supporting angle rather than standing square to the ball, the foundation of good spacing in possession.",
    steps: [
      "Set up a triangle of cones, 8 yards apart, with one player on each.",
      "The receiving player must always move to a slight angle off the passer before receiving, never standing directly in line.",
      "Pass around the triangle, checking each player's angle before the next pass.",
      "Rotate positions every few minutes."
    ],
    points: ["Angle your body to see both the ball and the space behind you", "Move before the pass arrives, not after", "Call for the ball once your angle is set"],
    levelNotes: {
      recreation: "Walk through the correct angle with cones marking a 'good spot' before adding live passing."
    }
  },
  {
    id: "p14", name: "Driven pass technique", category: "technical", formation: "line",
    ageMin: 12, ageMax: 19, skills: ["travel", "academy"], focus: ["passing"],
    players: "8-16", equipment: ["Cones", "Balls"],
    summary: "Focused technical work on the low, driven pass — firmer and flatter than a standard ground pass — used to beat a defender's leg or cover more ground quickly.",
    steps: [
      "Pair players up 15-18 yards apart.",
      "Each player strikes a driven pass, aiming to keep it low and firm rather than lifted.",
      "Focus on a locked ankle and a follow-through toward the target on every strike.",
      "Increase distance gradually as accuracy holds up."
    ],
    points: ["Strike through the ball's equator, not underneath it", "Lock the ankle at contact", "Follow through low toward the target"],
    levelNotes: {
      travel: "Keep the distance shorter until the flight stays consistently low.",
      academy: "Add a passive obstacle (a mannequin or cone at knee height) the pass must stay under."
    }
  },

  // SHOOTING (additional)
  {
    id: "s8", name: "Quick-fire finishing circuit", category: "technical", formation: "goal",
    ageMin: 9, ageMax: 14, skills: ["recreation", "travel"], focus: ["shooting"],
    players: "8-18", equipment: ["Cones", "Goal", "Balls"],
    summary: "A high-repetition finishing circuit where players move quickly between three shooting stations, keeping energy high and touches on goal frequent.",
    steps: [
      "Set up three shooting stations around the box at different angles, each with a small pile of balls.",
      "Players rotate through all three stations, taking 3 shots at each before moving to the next.",
      "Keep the pace brisk — the goal is quantity of quality reps, not standing around.",
      "Run through the full circuit twice."
    ],
    points: ["Quick set-up touch before every shot", "Vary the target corner shot to shot", "Keep the energy and pace up between stations"],
    levelNotes: {
      recreation: "Keep the stations close to goal so success comes easily and often.",
      travel: "Add a goalkeeper and require a specific corner to be called before each shot."
    }
  },
  {
    id: "s9", name: "Curling shot technique", category: "technical", formation: "goal",
    ageMin: 13, ageMax: 19, skills: ["travel", "academy"], focus: ["shooting"],
    players: "6-14", equipment: ["Goal", "Balls"],
    summary: "Technical work on striking with the inside of the foot to bend the ball around a goalkeeper or a defender, a finishing tool for tighter-angle chances.",
    steps: [
      "Set up balls at a slight angle to goal, 16-18 yards out.",
      "Players strike across the outside of the ball with the inside of the foot to generate curl toward the far post.",
      "Take 5-6 attempts, focusing on contact point before adding power.",
      "Progress to game-speed strikes once the curl is consistent."
    ],
    points: ["Strike across the ball, not through the center", "Lean the body away from the direction of curl slightly", "Follow through across your body toward the target"],
    levelNotes: {
      travel: "Start with a stationary ball and no goalkeeper to isolate the technique.",
      academy: "Add a goalkeeper and a defender in the near-post passing lane to make the curl necessary."
    }
  },
  {
    id: "s10", name: "1-2 combination finish", category: "technical", formation: "goal",
    ageMin: 11, ageMax: 17, skills: ["travel", "academy"], focus: ["shooting", "passing"],
    players: "8-16", equipment: ["Cones", "Goal", "Balls"],
    summary: "A simple wall-pass into the box, finished first-time, linking the passing work from earlier in a session directly into a shooting outcome.",
    steps: [
      "Position a passer at the top of the box and a wall player just inside it, with a finisher approaching from deeper.",
      "The finisher plays to the wall player and sprints past into the box.",
      "The wall player returns the ball first-time into the finisher's path.",
      "The finisher strikes first-time on goal; rotate roles every 4-5 reps."
    ],
    points: ["The wall player sets the return first-time, no extra touch", "Time the run so the return ball arrives in stride", "Get a shot away quickly once in the box"],
    levelNotes: {
      travel: "Slow the pattern down and rehearse without a goalkeeper first.",
      academy: "Add a recovering defender to make the timing and the finish fully live."
    }
  },
  {
    id: "s11", name: "Near post far post choice", category: "technical", formation: "goal",
    ageMin: 10, ageMax: 16, skills: ["recreation", "travel", "academy"], focus: ["shooting"],
    players: "8-18", equipment: ["Cones", "Goal", "Balls"],
    summary: "Players receive a service and must read the goalkeeper's position to decide between a near-post or far-post finish, building in-game decision-making rather than a scripted shot.",
    steps: [
      "Set up a server delivering crosses or cutbacks from the side of the box.",
      "A goalkeeper (or coach standing in as one) positions randomly toward the near or far post before each service.",
      "The finisher reads the keeper's position and picks the open side to finish.",
      "Rotate through 8-10 reps per finisher, then swap roles."
    ],
    points: ["Scan the goal before the ball arrives, not after", "Commit to a decision, don't hesitate mid-strike", "Finish low and placed rather than blazing at the keeper"],
    levelNotes: {
      recreation: "Keep the keeper mostly central so both options stay realistically open.",
      academy: "Add a recovering defender to force a quicker read and finish."
    }
  },
  {
    id: "s12", name: "Penalty kick composure reps", category: "technical", formation: "goal",
    ageMin: 10, ageMax: 19, skills: ["recreation", "travel", "academy"], focus: ["shooting"],
    players: "6-18", equipment: ["Goal", "Balls"],
    summary: "Players take penalty kicks under a bit of manufactured pressure — a countdown, a crowd of watching teammates — building the composure needed for the real, high-stakes version.",
    steps: [
      "Line players up to take penalties one at a time with a goalkeeper in place.",
      "Gather the rest of the group behind the shooter to create a bit of watching pressure.",
      "Each player picks their spot before stepping up and commits to it fully.",
      "Run 2-3 rounds so everyone gets multiple attempts."
    ],
    points: ["Decide your spot before you place the ball, not while walking up", "Keep the run-up consistent every time", "Strike with conviction — a committed shot beats a hesitant one"],
    levelNotes: {
      recreation: "Keep the tone light and encouraging — this is about building comfort, not pressure for its own sake.",
      academy: "Add real stakes, like a mini shootout between two teams, to replicate match pressure."
    }
  },
  {
    id: "s13", name: "Turn and shoot", category: "technical", formation: "goal",
    ageMin: 9, ageMax: 14, skills: ["recreation", "travel"], focus: ["shooting"],
    players: "8-16", equipment: ["Cones", "Goal", "Balls"],
    summary: "Players receive with their back to goal and must turn under control before shooting, a common finishing pattern for a target forward receiving into feet.",
    steps: [
      "Position a server behind the penalty spot and a finisher with their back to goal in front of them.",
      "The server plays the ball into the finisher's feet.",
      "The finisher takes a touch to turn toward goal, using whichever turn feels most natural, then shoots.",
      "Rotate through 8-10 reps, alternating which side the finisher turns toward."
    ],
    points: ["Check the defender's or goalkeeper's position with a glance before turning", "Turn onto the stronger shooting angle when possible", "Get the shot away quickly once turned — don't take an extra touch"],
    levelNotes: {
      recreation: "Serve the ball gently and give plenty of time to find the turn.",
      travel: "Add a passive defender behind the finisher to make the turn decision realistic."
    }
  },

  // DEFENDING (additional)
  {
    id: "def8", name: "Show and delay to sideline", category: "technical", formation: "zones",
    ageMin: 9, ageMax: 14, skills: ["recreation", "travel"], focus: ["defending"],
    players: "8-16", equipment: ["Cones"],
    summary: "Defenders practice showing an attacker toward the sideline and delaying rather than diving in, using the touchline as an extra defender the way real games reward.",
    steps: [
      "Mark a channel along a sideline with a defender starting centrally and an attacker with the ball 10 yards away.",
      "The attacker tries to dribble past toward the middle of the field; the defender's job is to show them toward the line instead.",
      "Play until the attacker is forced out of bounds or the defender wins the ball.",
      "Rotate roles every 4-5 reps."
    ],
    points: ["Angle your body to close off the middle of the field", "Stay patient — forcing wide is a win even without a tackle", "Match the attacker's pace, don't overcommit"],
    levelNotes: {
      recreation: "Give the defender a generous head start in position to build early confidence.",
      travel: "Add a time limit that rewards the defender for forcing the attacker out quickly."
    }
  },
  {
    id: "def9", name: "Defending crosses and headers", category: "technical", formation: "goal",
    ageMin: 12, ageMax: 19, skills: ["travel", "academy"], focus: ["defending"],
    players: "8-16", equipment: ["Cones", "Goal", "Balls"],
    summary: "Defenders practice tracking a runner and winning the ball in the air on crosses into the box, a specific and high-value defending skill that isolated 1v1 drills don't cover.",
    steps: [
      "Set up a server crossing from the wing, an attacker making a run into the box, and a defender tracking them.",
      "The server delivers a cross; the defender must get goal-side and win the header or clearance.",
      "Rotate servers, attackers, and defenders every 4-5 reps.",
      "Vary the cross type: driven, floated, and cut-back deliveries."
    ],
    points: ["Get goal-side of the attacker before the cross arrives", "Attack the ball at its highest point", "Clear with distance and width, not back toward your own goal"],
    levelNotes: {
      travel: "Use a slower, floated service at first to build timing before adding driven crosses.",
      academy: "Add a goalkeeper communicating with the defender to simulate real coordination."
    }
  },
  {
    id: "def10", name: "Compactness shuttle", category: "technical", formation: "zones",
    ageMin: 12, ageMax: 19, skills: ["academy"], focus: ["defending"],
    players: "10-16", equipment: ["Cones", "Bibs"],
    summary: "A unit of defenders shuttles side to side and forward-back on a coach's command, training the collective compactness that makes a defensive line hard to play through.",
    steps: [
      "Line up 4 defenders in their usual defensive shape inside a marked zone.",
      "The coach calls directions — left, right, step up, drop — and the whole line shifts together.",
      "Check spacing between each command; correct any gaps before continuing.",
      "Progress to calling directions faster to test the group's communication under pace."
    ],
    points: ["Move on the call, not a beat behind", "Keep even spacing across the line at all times", "Talk constantly to stay connected as a unit"],
    levelNotes: {
      academy: "Add a ball being played around the perimeter by attackers to give the shifts a live picture to react to."
    }
  },
  {
    id: "def11", name: "1v2 defending recovery", category: "technical", formation: "zones",
    ageMin: 13, ageMax: 19, skills: ["academy"], focus: ["defending"],
    players: "9-16", equipment: ["Cones"],
    summary: "A lone defender faces two attackers and must delay, show them into a difficult angle, and buy time for cover to arrive — training composure in a numbers-down moment.",
    steps: [
      "Mark a 20x15 yard area with a defender starting centrally and two attackers with a ball.",
      "The attackers try to combine and score at a small goal; the defender must delay without overcommitting.",
      "After 3 seconds, a second defender joins from the side to represent recovering cover.",
      "Play until a goal or the ball is won; rotate roles."
    ],
    points: ["Delay, don't dive in — buying time is the job until help arrives", "Show attackers away from the most dangerous space", "Communicate loudly the moment cover arrives"],
    levelNotes: {
      academy: "Vary the delay before cover arrives (2-5 seconds) so the defender can't predict help's timing."
    }
  },
  {
    id: "def12", name: "Interception reads", category: "technical", formation: "box",
    ageMin: 10, ageMax: 15, skills: ["travel", "academy"], focus: ["defending"],
    players: "8-16", equipment: ["Cones", "Bibs"],
    summary: "Defenders practice reading a passing lane and stepping in front to intercept, rather than only reacting once the ball has been played — a proactive defending habit.",
    steps: [
      "Set up a 4v2 possession grid with two defenders working together.",
      "Defenders must try to anticipate the next pass and step into the lane to intercept, rather than chasing the ball after it's played.",
      "Award a bonus point for a clean interception versus a standard tackle.",
      "Rotate defenders in every 3-4 minutes."
    ],
    points: ["Watch the passer's body shape for clues on where the ball is going", "Time the step into the lane so it's a clean interception, not a foul", "Stay ready to recover if the read is wrong"],
    levelNotes: {
      travel: "Slow the possession team's tempo at first so reads are easier to make successfully.",
      academy: "Speed the tempo up and track the team's interception count as a session target."
    }
  },
  {
    id: "def13", name: "Last defender race", category: "technical", formation: "line",
    ageMin: 8, ageMax: 12, skills: ["recreation", "travel"], focus: ["defending", "fitness"],
    players: "8-20", equipment: ["Cones"],
    summary: "A fun race that simulates being the last defender chasing back on a breakaway, building recovery speed and the mentality to never stop chasing the play.",
    steps: [
      "Set up a 20-yard sprint from a 'beaten' starting position to a 'recovered' cone near an imaginary goal.",
      "On the whistle, players sprint the full distance as if chasing back after being beaten.",
      "Time each player or race them in pairs.",
      "Run 3-4 reps with full recovery between them."
    ],
    points: ["Sprint at full effort, no jogging back", "Get goal-side before slowing to defend", "Keep believing you can catch the play — never give up on the sprint"],
    levelNotes: {
      recreation: "Frame it as a fun race with cheering rather than a fitness test."
    }
  },

  // FITNESS / AGILITY (additional)
  {
    id: "f6", name: "Box jump and sprint combo", category: "technical", formation: "line",
    ageMin: 11, ageMax: 19, skills: ["travel", "academy"], focus: ["fitness"],
    players: "6-18", equipment: ["Cones"],
    summary: "A short explosive circuit pairing a jump with an immediate sprint, training the burst of power that shows up in duels, headers, and quick accelerations.",
    steps: [
      "Mark a takeoff spot and a 10-yard sprint lane beyond it.",
      "Player performs two-footed broad jumps in place, then immediately sprints the 10 yards at full speed.",
      "Walk back to recover fully before the next rep.",
      "Run 5-6 total reps."
    ],
    points: ["Land soft and balanced from the jump", "Explode into the sprint the instant you land", "Full recovery between reps to keep quality high"],
    levelNotes: {
      travel: "Reduce to a single jump before the sprint while the movement pattern is new.",
      academy: "Add a ball to receive and dribble away with at the end of the sprint."
    }
  },
  {
    id: "f7", name: "Partner resistance sprints", category: "technical", formation: "pairs",
    ageMin: 13, ageMax: 19, skills: ["travel", "academy"], focus: ["fitness"],
    players: "8-18", equipment: ["None"],
    summary: "Partners provide light resistance to each other over short sprints, building the drive phase strength that helps players win the first few steps of a race for the ball.",
    steps: [
      "Pair players up; one holds the other lightly at the waist or shoulders from behind.",
      "The lead player drives forward for 10 yards against the light resistance while the partner jogs behind, resisting gently.",
      "Release the resistance for the final 5 yards to sprint free.",
      "Switch roles and repeat for 4-5 reps each."
    ],
    points: ["Stay low and drive with the legs, don't lean too far forward", "Resistance should be light — this builds technique, not a wrestling match", "Full sprint once released"],
    levelNotes: {
      travel: "Keep the resistance very light and the distance short while players learn the drill.",
      academy: "Increase resistance slightly and add a ball to receive right at the release point."
    }
  },
  {
    id: "f8", name: "Repeat sprint pyramid", category: "technical", formation: "line",
    ageMin: 13, ageMax: 19, skills: ["academy"], focus: ["fitness"],
    players: "6-20", equipment: ["Cones"],
    summary: "A demanding conditioning set that climbs and descends in distance, building the repeat-sprint ability that separates fresh legs from tired ones late in a match.",
    steps: [
      "Mark cones at 10, 20, 30, 20, and 10 yards from a start line.",
      "Players sprint to each distance in order, jogging back to the start between each rep.",
      "Rest 30-45 seconds between reps, shorter than a full recovery to build match-realistic fatigue resistance.",
      "Complete the full pyramid as one set; run 1-2 sets depending on the group's conditioning level."
    ],
    points: ["Hold sprint quality even as fatigue builds", "Use the jog-back actively, not as a total rest", "Mental toughness matters as much as physical here"],
    levelNotes: {
      academy: "This is a demanding academy-level set — make sure the group is properly warmed up first."
    }
  },

  // SSG / POSSESSION (additional)
  {
    id: "ssg8", name: "Overload possession 5v3", category: "ssg", formation: "box",
    ageMin: 9, ageMax: 16, skills: ["recreation", "travel", "academy"], focus: ["possession", "passing"], formats: ["7v7", "9v9"],
    players: "8-16", equipment: ["Cones", "Bibs"],
    summary: "A numbers-up possession game that rewards quick combination play and support, building confidence in keeping the ball against real pressure.",
    steps: [
      "Mark a 20x20 yard grid.",
      "Set up a 5v3 possession game inside — five attackers against three defenders.",
      "Attackers try to string together as many passes as possible; defenders press to win it back.",
      "Rotate defenders in every 3 minutes so everyone gets both roles."
    ],
    points: ["Spread out to use the extra numbers", "Support at angles, not directly behind the ball", "Play out of pressure calmly rather than rushing"],
    levelNotes: {
      recreation: "Allow unlimited touches to keep the game flowing and confidence high.",
      academy: "Move to a two-touch limit and track consecutive completed passes as a team target."
    }
  },
  {
    id: "ssg9", name: "End-zone possession game", category: "ssg", formation: "zones",
    ageMin: 10, ageMax: 17, skills: ["travel", "academy"], focus: ["possession", "shooting"], formats: ["7v7", "9v9"],
    players: "10-16", equipment: ["Cones", "Bibs"],
    summary: "Teams score by dribbling or passing the ball into an end zone rather than at a goal, rewarding patient buildup and combination play over direct shooting.",
    steps: [
      "Mark a field with an end zone at each end, roughly 5 yards deep.",
      "Teams score a point for any player receiving the ball under control inside the opponent's end zone.",
      "Play normal possession rules elsewhere on the field.",
      "Play 5-6 minute periods, coaching patience in building toward the end zone."
    ],
    points: ["Draw defenders out before playing into the end zone", "Support the player entering the zone for a possible layoff", "Don't force the ball forward before the opportunity is really there"],
    levelNotes: {
      travel: "Make the end zones wide and shallow so entries come more easily at first.",
      academy: "Narrow the end zones and require a first-time pass or touch to score inside them."
    }
  },
  {
    id: "ssg10", name: "4v4 plus goalkeepers", category: "ssg", formation: "box",
    ageMin: 9, ageMax: 19, skills: ["recreation", "travel", "academy"], focus: ["shooting", "defending", "possession"], formats: ["9v9", "11v11"],
    players: "10-16", equipment: ["Cones", "Goals", "Bibs"],
    summary: "A small-sided game with full-size goals and goalkeepers, closer to the real match picture than a small-goals version and a good finishing-focused session closer.",
    steps: [
      "Set up two full-size (or junior) goals with goalkeepers at a 30x20 yard field.",
      "Play 4v4 with normal rules and offside if age-appropriate.",
      "Play 4-6 minute games, rotating in extra players and goalkeepers between games.",
      "Coach shape and finishing decisions from the sideline."
    ],
    points: ["Attack the goal directly when the chance is on", "Communicate with your goalkeeper on set pieces and back passes", "Track back the moment possession is lost"],
    levelNotes: {
      recreation: "Keep goals slightly smaller or use extra keepers so scoring stays achievable.",
      academy: "Add a condition like 'no goals from outside the box' to encourage combination play in tight areas."
    }
  },
  {
    id: "ssg11", name: "Counter-attack transition game", category: "ssg", formation: "zones",
    ageMin: 12, ageMax: 19, skills: ["travel", "academy"], focus: ["possession", "defending", "fitness"], formats: ["9v9", "11v11"],
    players: "12-18", equipment: ["Cones", "Bibs", "Goals"],
    summary: "A game built specifically to reward fast, direct attacking the moment the ball is won, training the counter-attacking instinct that punishes a disorganized opponent.",
    steps: [
      "Set up a full-width field with goals at each end.",
      "Play normal rules, but award bonus points for any goal scored within 8 seconds of winning possession.",
      "Play 5-6 minute periods, coaching the first pass and run after a turnover specifically.",
      "Track and announce the bonus-point count to keep the incentive visible."
    ],
    points: ["Look forward immediately on winning the ball, not sideways", "Sprint into space the instant possession changes", "Keep the first pass simple and forward, not fancy"],
    levelNotes: {
      travel: "Extend the bonus window to 10-12 seconds so the reward feels achievable.",
      academy: "Tighten to a true 6-second window to sharpen the group's transition speed."
    }
  },
  {
    id: "ssg12", name: "Wide overload game", category: "ssg", formation: "box",
    ageMin: 12, ageMax: 19, skills: ["travel", "academy"], focus: ["possession", "passing"], styles: ["combination"], formats: ["9v9", "11v11"],
    players: "10-16", equipment: ["Cones", "Bibs", "Goals"],
    summary: "A small-sided game with wide channels that only attackers can use, encouraging teams to build overloads out wide and cross into the box — reinforcing the combination-play ideas from earlier in a session.",
    steps: [
      "Mark a field with a wide channel down each sideline, entry restricted to attacking players only.",
      "Play normal small-sided rules elsewhere, but goals only count if the buildup used a wide channel at some point in the possession.",
      "Play 5-6 minute periods, coaching overlaps and underlaps into the channel.",
      "Rotate which players get extra time in the wide channel to spread the reps around."
    ],
    points: ["Use the wide channel with purpose, not just for width's sake", "Time runs into the channel so the ball carrier has an option", "Look up for the cross or cutback once in the channel"],
    levelNotes: {
      travel: "Relax the rule to 'bonus point' rather than a requirement while the idea is new.",
      academy: "Make wide-channel use a strict scoring requirement to force the pattern every time."
    }
  },

  // COOLDOWN (additional)
  {
    id: "c4", name: "Foam roll and mobility flow", category: "cooldown", formation: "line",
    ageMin: 13, ageMax: 19, skills: ["academy"], focus: [],
    players: "6-20", equipment: ["Foam rollers (optional)"],
    summary: "A slightly more structured cooldown for older, higher-training-load players, combining mobility movements with optional foam rolling to aid recovery between sessions.",
    steps: [
      "Spread players out with enough space to move freely.",
      "Lead a short mobility flow: hip circles, world's greatest stretch, ankle rocks.",
      "For players with access to foam rollers, spend 2-3 minutes on the quads, calves, and upper back.",
      "Close with a few slow, deep breaths as a group."
    ],
    points: ["Move with control, not speed", "Breathe steadily throughout", "Focus on areas that felt tight during the session"],
    levelNotes: {
      academy: "Tie this to the session's physical demands — extra time on legs after a fitness-heavy day."
    }
  },
  {
    id: "c5", name: "Two-minute reflection circle", category: "cooldown", formation: "circle",
    ageMin: 9, ageMax: 19, skills: ["recreation", "travel", "academy"], focus: [],
    players: "6-24", equipment: ["None"],
    summary: "A quick, low-key closing circle where players share one word or one sentence about the session, building team culture without eating into limited practice time.",
    steps: [
      "Gather the group in a circle for two minutes at the very end of the session.",
      "Ask each player to share one word describing how the session felt, or one thing they're proud of.",
      "Keep it moving quickly — this isn't a long debrief, just a quick moment of connection.",
      "Close with a group cheer or a coach's one-sentence takeaway."
    ],
    points: ["Keep energy positive regardless of how the session went", "Make sure every player gets a turn", "Respect the two-minute limit so pickup stays on time"],
    levelNotes: {
      recreation: "Great as a closing ritual every single session — the consistency is what builds culture."
    }
  },

  // TRAINING PHILOSOPHY — POSITIONAL PLAY (additional)
  {
    id: "bp3", name: "Build-out from the back", category: "technical", formation: "zones",
    ageMin: 12, ageMax: 19, skills: ["travel", "academy"], focus: ["possession", "passing"], styles: ["positional"],
    players: "10-16", equipment: ["Cones", "Bibs"],
    summary: "A structured possession pattern starting from the goalkeeper, training the patient, positional build-out associated with possession-based teams rather than clearing the ball long under pressure.",
    steps: [
      "Set up a back three or four plus a goalkeeper at one end of a marked third of the field, facing a small group of pressing attackers.",
      "The goalkeeper starts every sequence, and the back line must build play out using short passes and movement rather than going long.",
      "Attackers press to try to win the ball high; if they do, they can score at a small goal.",
      "Reset from the goalkeeper after every turnover or clearance and repeat."
    ],
    points: ["Create passing angles before the goalkeeper receives the ball back", "Split the center backs wide to stretch the press", "Play out of pressure calmly — composure beats panic"],
    levelNotes: {
      travel: "Allow the goalkeeper an escape long pass as a safety valve while the pattern is new.",
      academy: "Remove the long-pass option entirely and make the group solve every press on the ground."
    }
  },
  {
    id: "bp4", name: "Rondo to switch", category: "technical", formation: "box",
    ageMin: 12, ageMax: 19, skills: ["academy"], focus: ["possession", "passing"], styles: ["positional"],
    players: "10-16", equipment: ["Cones", "Bibs"],
    summary: "A large rondo split into two connected zones, training players to recognize the moment to switch the point of attack from a settled possession into a fresh side.",
    steps: [
      "Set up two adjoining 12x12 yard grids with a shared 'free' player who can move between both.",
      "Play a standard possession rondo in one grid until the group has strung together several passes.",
      "Use the free player to switch the ball into the second grid, where a new rondo begins.",
      "Continue switching back and forth every time possession is well established."
    ],
    points: ["Recognize when a side has gone stale and needs a switch", "Use the free player as the connector, not just an extra body", "Receive the switch pass on the half-turn to keep tempo up"],
    levelNotes: {
      academy: "Add a defender who can chase the switch, rewarding a well-timed and well-weighted pass."
    }
  },

  // TRAINING PHILOSOPHY — COMBINATION PLAY (additional)
  {
    id: "ar3", name: "Give-and-go into the box", category: "technical", formation: "gates",
    ageMin: 11, ageMax: 17, skills: ["travel", "academy"], focus: ["passing", "shooting"], styles: ["combination"],
    players: "9-16", equipment: ["Cones", "Goal", "Balls"],
    summary: "A simple combination pattern that ends in a shot, connecting the wall-pass idea directly to a finishing outcome so players see the full value of the combination.",
    steps: [
      "Position a passer at the edge of the box and a wall player just inside it, with a small goal to finish at.",
      "The passer plays to the wall player and sprints into the box.",
      "The wall player lays the ball back first-time into the run.",
      "The passer finishes on goal; rotate roles after every 4-5 reps."
    ],
    points: ["The wall player's touch is the pass, not a stop-and-start", "Sprint the instant the pass is played", "Finish quickly once in the box, don't over-touch it"],
    levelNotes: {
      travel: "Walk the pattern through without a defender until the timing clicks.",
      academy: "Add a recovering defender to make the run and finish fully live."
    }
  },
  {
    id: "ar4", name: "Diagonal combination runs", category: "technical", formation: "zones",
    ageMin: 13, ageMax: 19, skills: ["travel", "academy"], focus: ["passing", "dribbling"], styles: ["combination"],
    players: "9-18", equipment: ["Cones"],
    summary: "Players practice the diagonal run that pulls a defender out of position and opens a passing lane behind them — a key combination-play movement in the final third.",
    steps: [
      "Set up a channel with a ball carrier at one end and a runner starting central.",
      "The runner makes a diagonal run across the ball carrier's path, dragging an imaginary defender with them.",
      "The ball carrier plays into the space the run has vacated, either to the runner or a third player filling in behind.",
      "Rotate roles and repeat down the channel."
    ],
    points: ["Sell the diagonal run fully — a half-hearted run doesn't drag the defender", "Time the pass to the space created, not necessarily to the runner", "Third player should read the run and fill the vacated space"],
    levelNotes: {
      travel: "Walk through the pattern without pressure first so the movement is understood.",
      academy: "Add a defender tracking the runner to make the decision of where to play fully live."
    }
  },

  // TRAINING PHILOSOPHY — PRESS AND PHYSICAL DUELS (additional)
  {
    id: "epl4", name: "Set piece defending organization", category: "technical", formation: "zones",
    ageMin: 12, ageMax: 19, skills: ["travel", "academy"], focus: ["defending"], styles: ["physical"],
    players: "10-18", equipment: ["Cones", "Goal", "Balls"],
    summary: "A focused walkthrough and live rep of defending a corner or free kick, training the organization and physical commitment that decides a large share of goals at every level.",
    steps: [
      "Set up defenders in their assigned zonal or man-marking positions inside the box.",
      "Walk through each player's job — who takes the near post, who tracks the most dangerous runner — before going live.",
      "Deliver a real corner or free kick service and have the group defend it fully.",
      "Reset and repeat 5-6 times, rotating the delivery type and angle."
    ],
    points: ["Attack the ball first, don't wait for it to arrive", "Communicate assignments loudly before every delivery", "Clear with authority — first contact should be decisive, not tentative"],
    levelNotes: {
      travel: "Start with a walkthrough at half speed before adding live, full-speed reps.",
      academy: "Add an attacking team trying to score to make every rep fully competitive."
    }
  },
  {
    id: "epl5", name: "Front-foot tackling technique", category: "technical", formation: "pairs",
    ageMin: 10, ageMax: 19, skills: ["travel", "academy"], focus: ["defending"], styles: ["physical"],
    players: "8-18", equipment: ["Cones"],
    summary: "Technical work on the block tackle — timing, body position, and follow-through — building the confidence to win the ball cleanly and decisively rather than shying away from contact.",
    steps: [
      "Pair players up facing each other, each with a foot on their own ball.",
      "On a signal, both players attempt a controlled block tackle at the same time, driving through the ball with a firm ankle.",
      "Progress to one player dribbling gently at the other, who times a live tackle.",
      "Run 6-8 reps per pair, alternating who dribbles and who tackles."
    ],
    points: ["Firm ankle and full body weight behind the tackle", "Eyes on the ball through contact, not the opponent", "Follow through to win the ball, not just make contact"],
    levelNotes: {
      travel: "Keep tackles controlled and at moderate pace to build technique safely.",
      academy: "Add a live 1v1 to goal so the tackle has a real match consequence attached."
    }
  }
];

/* ---------------------------------------------------------
   CONSTANTS
--------------------------------------------------------- */

export const AGES = Array.from({ length: 13 }, (_, i) => i + 7); // 7..19

export const SKILL_LEVELS = [
  { id: "recreation", name: "Recreation", tagline: "Fun, participation, and basic skill building for every player on the roster." },
  { id: "travel", name: "Travel club", tagline: "Competitive club soccer with an emphasis on technique and team tactics." },
  { id: "academy", name: "Academy club", tagline: "High-performance training with detailed technical and tactical demands." }
];

export const FOCUS_OPTIONS = [
  { id: "dribbling", name: "Dribbling and ball mastery" },
  { id: "passing", name: "Passing and receiving" },
  { id: "shooting", name: "Shooting and finishing" },
  { id: "defending", name: "Defending and pressing" },
  { id: "possession", name: "Possession and tactics" },
  { id: "fitness", name: "Speed and agility" }
];

export const DURATIONS = [45, 60, 75, 90];

export const MAX_FOCUS = 3;

export const GAME_FORMATS = [
  { id: "7v7", name: "7v7", tagline: "Typically U8-U10. Small pitch, small goals, no offside — everyone touches the ball constantly." },
  { id: "9v9", name: "9v9", tagline: "Typically U11-U12. A bridge format — real width and depth, but still forgiving space to build in." },
  { id: "11v11", name: "11v11", tagline: "Typically U13 and up. Full-sized pitch, full tactical structure, real positional demands." }
];

export const STYLE_OPTIONS = [
  {
    id: "blend",
    name: "Blended identity (recommended)",
    tagline: "Barcelona-style possession, Arsenal-style combination play, and Premier League-style physical defending, woven through every session."
  },
  {
    id: "positional",
    name: "Positional play emphasis",
    tagline: "Barcelona-inspired: rondos, structured spacing, and quick possession that never lets the ball go stale."
  },
  {
    id: "combination",
    name: "Combination play emphasis",
    tagline: "Arsenal-inspired: third-man runs, overlaps, and underlaps that break lines with quick, connected passing."
  },
  {
    id: "physical",
    name: "Press and duel emphasis",
    tagline: "Premier League-inspired: aggressive pressing, physical 1v1 duels, and no-nonsense defending."
  }
];

export const STYLE_DIRECTIVES = {
  positional: "Keep the ball moving with one- and two-touch combinations. Hold width and spacing so passing lanes stay open, and press to win the ball back within five seconds of losing it.",
  combination: "Look for the third-man run, the overlap, and the underlap. Two or three quick passes should be enough to break a defensive line.",
  physical: "Every 1v1 is a contest — attack second balls and aerial duels, defend set pieces aggressively, and never ease off a challenge."
};

export const CATEGORY_LABEL = {
  warmup: "Warm-up",
  technical: "Technical",
  ssg: "Small-sided game",
  cooldown: "Cool-down"
};
export const SKILL_CATEGORIES = [
  { id: "technical", name: "Technical", skills: ["First touch", "Passing accuracy", "Dribbling & ball control", "Finishing", "Heading", "Crossing", "Weak foot ability"] },
  { id: "physical", name: "Physical", skills: ["Pace", "Strength & physicality", "Stamina", "Agility & quickness", "Aerial ability"] },
  { id: "tactical", name: "Tactical", skills: ["Positional awareness", "1v1 defending", "Pressing & work rate", "Vision & decision-making", "Composure under pressure", "Communication & leadership", "Set-piece delivery"] },
  { id: "goalkeeping", name: "Goalkeeping", skills: ["Shot-stopping", "Distribution", "Command of the box", "1v1 vs attacker"] }
];

export const ALL_SKILLS = SKILL_CATEGORIES.flatMap((c) => c.skills);
export const MAX_STRENGTHS = 5;
export const MAX_NEEDS = 3;

export const POSITIONS = [
  { id: "GK", name: "Goalkeeper", short: "GK", keySkills: ["Shot-stopping", "Distribution", "Command of the box", "Composure under pressure"] },
  { id: "CB", name: "Center back", short: "CB", keySkills: ["Aerial ability", "1v1 defending", "Positional awareness", "Strength & physicality"] },
  { id: "FB", name: "Fullback / wingback", short: "FB", keySkills: ["Pace", "Stamina", "Crossing", "1v1 defending"] },
  { id: "CDM", name: "Defensive midfielder", short: "CDM", keySkills: ["Positional awareness", "Pressing & work rate", "Passing accuracy", "1v1 defending"] },
  { id: "CM", name: "Central midfielder", short: "CM", keySkills: ["Passing accuracy", "Vision & decision-making", "Stamina", "First touch"] },
  { id: "CAM", name: "Attacking midfielder", short: "CAM", keySkills: ["Vision & decision-making", "First touch", "Dribbling & ball control", "Finishing"] },
  { id: "W", name: "Winger", short: "W", keySkills: ["Pace", "Dribbling & ball control", "Crossing", "Agility & quickness"] },
  { id: "ST", name: "Striker", short: "ST", keySkills: ["Finishing", "Heading", "Composure under pressure", "Aerial ability"] }
];

export function scorePlayerForPosition(player, position) {
  let score = 0;
  position.keySkills.forEach((skill) => {
    if (player.strengths.includes(skill)) score += 2;
    if (player.needs.includes(skill)) score -= 1;
  });
  return score;
}

export function suggestPositionsForPlayer(player) {
  const scored = POSITIONS.map((p) => ({ pos: p, score: scorePlayerForPosition(player, p) }));
  scored.sort((a, b) => b.score - a.score);
  const positive = scored.filter((s) => s.score > 0);
  const top = positive.length ? positive : scored.slice(0, 1);
  return top.slice(0, 2).map((s) => s.pos.id);
}

/* ---------------------------------------------------------
   FORMATION ASSISTANT — objectives and formation library
--------------------------------------------------------- */

export const OBJECTIVES = [
  { id: "possession", name: "Possession & build-out", tagline: "Control the game through the middle with patient buildup from the back." },
  { id: "press", name: "High press & quick transition", tagline: "Win the ball high up the field and attack in numbers before the defense resets." },
  { id: "defensive", name: "Defensive solidity & counter", tagline: "Stay compact, limit clean looks at goal, and hit teams on the break." },
  { id: "balanced", name: "Balanced / flexible", tagline: "A shape that doesn't overcommit either way — good against an unknown opponent." }
];

export const FORMATIONS = {
  "7v7": [
    { name: "2-3-1", tags: ["possession", "balanced"], blurb: "Two center backs, a midfield three, and a lone striker — the standard shape for building out of the back at this age.", slots: [
      { role: "GK", label: "GK", x: 50, y: 6 },
      { role: "CB", label: "CB", x: 30, y: 22 }, { role: "CB", label: "CB", x: 70, y: 22 },
      { role: "CM", label: "CM", x: 22, y: 52 }, { role: "CM", label: "CM", x: 50, y: 52 }, { role: "CM", label: "CM", x: 78, y: 52 },
      { role: "ST", label: "ST", x: 50, y: 84 }
    ]},
    { name: "1-3-2", tags: ["press", "balanced"], blurb: "A single center back behind a busy midfield three, with two forwards ready to press the opposition's first pass.", slots: [
      { role: "GK", label: "GK", x: 50, y: 6 },
      { role: "CB", label: "CB", x: 50, y: 18 },
      { role: "CM", label: "CM", x: 20, y: 46 }, { role: "CM", label: "CM", x: 50, y: 44 }, { role: "CM", label: "CM", x: 80, y: 46 },
      { role: "ST", label: "ST", x: 34, y: 80 }, { role: "ST", label: "ST", x: 66, y: 80 }
    ]},
    { name: "3-2-1", tags: ["defensive"], blurb: "A back three for defensive security, a tight midfield two, and one out ball up top for counters.", slots: [
      { role: "GK", label: "GK", x: 50, y: 6 },
      { role: "CB", label: "CB", x: 24, y: 20 }, { role: "CB", label: "CB", x: 50, y: 17 }, { role: "CB", label: "CB", x: 76, y: 20 },
      { role: "CM", label: "CM", x: 34, y: 50 }, { role: "CM", label: "CM", x: 66, y: 50 },
      { role: "ST", label: "ST", x: 50, y: 82 }
    ]},
    { name: "3-1-2", tags: ["defensive", "balanced"], blurb: "A back three protected by a single holding midfielder, freeing two forwards to combine and stretch the game up top.", slots: [
      { role: "GK", label: "GK", x: 50, y: 6 },
      { role: "CB", label: "CB", x: 24, y: 20 }, { role: "CB", label: "CB", x: 50, y: 17 }, { role: "CB", label: "CB", x: 76, y: 20 },
      { role: "CDM", label: "CDM", x: 50, y: 46 },
      { role: "ST", label: "ST", x: 35, y: 80 }, { role: "ST", label: "ST", x: 65, y: 80 }
    ]},
    { name: "2-1-3", tags: ["press"], blurb: "A minimal back two behind a single holding player, committing three attackers to press and pin the opponent immediately.", slots: [
      { role: "GK", label: "GK", x: 50, y: 6 },
      { role: "CB", label: "CB", x: 35, y: 20 }, { role: "CB", label: "CB", x: 65, y: 20 },
      { role: "CDM", label: "CDM", x: 50, y: 44 },
      { role: "W", label: "W", x: 20, y: 78 }, { role: "ST", label: "ST", x: 50, y: 84 }, { role: "W", label: "W", x: 80, y: 78 }
    ]}
  ],
  "9v9": [
    { name: "3-3-2", tags: ["possession", "balanced"], blurb: "A back three that can split wide to build, a midfield three that controls the center, two forwards linking together up top.", slots: [
      { role: "GK", label: "GK", x: 50, y: 6 },
      { role: "CB", label: "CB", x: 24, y: 20 }, { role: "CB", label: "CB", x: 50, y: 16 }, { role: "CB", label: "CB", x: 76, y: 20 },
      { role: "CM", label: "CM", x: 22, y: 48 }, { role: "CM", label: "CM", x: 50, y: 46 }, { role: "CM", label: "CM", x: 78, y: 48 },
      { role: "ST", label: "ST", x: 38, y: 82 }, { role: "ST", label: "ST", x: 62, y: 82 }
    ]},
    { name: "3-2-3", tags: ["press"], blurb: "A back three, a compact double pivot, and three attackers spread wide to press the opponent's build-out immediately.", slots: [
      { role: "GK", label: "GK", x: 50, y: 6 },
      { role: "CB", label: "CB", x: 24, y: 20 }, { role: "CB", label: "CB", x: 50, y: 16 }, { role: "CB", label: "CB", x: 76, y: 20 },
      { role: "CDM", label: "CDM", x: 38, y: 44 }, { role: "CM", label: "CM", x: 62, y: 44 },
      { role: "W", label: "W", x: 18, y: 78 }, { role: "ST", label: "ST", x: 50, y: 84 }, { role: "W", label: "W", x: 82, y: 78 }
    ]},
    { name: "4-3-1", tags: ["defensive", "balanced"], blurb: "A full back four for real defensive cover, a midfield three, and one focal point striker.", slots: [
      { role: "GK", label: "GK", x: 50, y: 6 },
      { role: "FB", label: "FB", x: 15, y: 22 }, { role: "CB", label: "CB", x: 38, y: 18 }, { role: "CB", label: "CB", x: 62, y: 18 }, { role: "FB", label: "FB", x: 85, y: 22 },
      { role: "CM", label: "CM", x: 24, y: 50 }, { role: "CM", label: "CM", x: 50, y: 48 }, { role: "CM", label: "CM", x: 76, y: 50 },
      { role: "ST", label: "ST", x: 50, y: 84 }
    ]},
    { name: "3-1-3-1", tags: ["possession", "press"], blurb: "A back three feeding a holding midfielder, a wide front three around a playmaker, and a focal striker — built to combine through the middle and the channels.", slots: [
      { role: "GK", label: "GK", x: 50, y: 6 },
      { role: "CB", label: "CB", x: 24, y: 20 }, { role: "CB", label: "CB", x: 50, y: 16 }, { role: "CB", label: "CB", x: 76, y: 20 },
      { role: "CDM", label: "CDM", x: 50, y: 40 },
      { role: "W", label: "W", x: 18, y: 64 }, { role: "CAM", label: "CAM", x: 50, y: 60 }, { role: "W", label: "W", x: 82, y: 64 },
      { role: "ST", label: "ST", x: 50, y: 86 }
    ]},
    { name: "4-2-2", tags: ["defensive"], blurb: "A full back four for real defensive width and cover, a tight midfield two, and two forwards ready to break on the counter.", slots: [
      { role: "GK", label: "GK", x: 50, y: 6 },
      { role: "FB", label: "FB", x: 15, y: 22 }, { role: "CB", label: "CB", x: 38, y: 18 }, { role: "CB", label: "CB", x: 62, y: 18 }, { role: "FB", label: "FB", x: 85, y: 22 },
      { role: "CM", label: "CM", x: 35, y: 50 }, { role: "CM", label: "CM", x: 65, y: 50 },
      { role: "ST", label: "ST", x: 38, y: 84 }, { role: "ST", label: "ST", x: 62, y: 84 }
    ]}
  ],
  "11v11": [
    { name: "4-3-3", tags: ["possession", "balanced"], blurb: "The classic Barcelona-style base — a back four, a midfield triangle, and wide forwards who can pin the opposition back.", slots: [
      { role: "GK", label: "GK", x: 50, y: 5 },
      { role: "FB", label: "FB", x: 14, y: 20 }, { role: "CB", label: "CB", x: 37, y: 15 }, { role: "CB", label: "CB", x: 63, y: 15 }, { role: "FB", label: "FB", x: 86, y: 20 },
      { role: "CDM", label: "CDM", x: 50, y: 38 }, { role: "CM", label: "CM", x: 28, y: 48 }, { role: "CM", label: "CM", x: 72, y: 48 },
      { role: "W", label: "W", x: 16, y: 80 }, { role: "ST", label: "ST", x: 50, y: 86 }, { role: "W", label: "W", x: 84, y: 80 }
    ]},
    { name: "4-2-3-1", tags: ["press"], blurb: "A double pivot that screens the back four, an attacking three feeding a target striker — built for winning the ball high and quickly.", slots: [
      { role: "GK", label: "GK", x: 50, y: 5 },
      { role: "FB", label: "FB", x: 14, y: 20 }, { role: "CB", label: "CB", x: 37, y: 15 }, { role: "CB", label: "CB", x: 63, y: 15 }, { role: "FB", label: "FB", x: 86, y: 20 },
      { role: "CDM", label: "CDM", x: 36, y: 40 }, { role: "CDM", label: "CDM", x: 64, y: 40 },
      { role: "W", label: "W", x: 18, y: 66 }, { role: "CAM", label: "CAM", x: 50, y: 62 }, { role: "W", label: "W", x: 82, y: 66 },
      { role: "ST", label: "ST", x: 50, y: 88 }
    ]},
    { name: "4-4-2", tags: ["defensive", "balanced"], blurb: "Two banks of four that stay compact and hard to break down, with two strikers who can hold the ball up on the counter.", slots: [
      { role: "GK", label: "GK", x: 50, y: 5 },
      { role: "FB", label: "FB", x: 14, y: 20 }, { role: "CB", label: "CB", x: 37, y: 15 }, { role: "CB", label: "CB", x: 63, y: 15 }, { role: "FB", label: "FB", x: 86, y: 20 },
      { role: "W", label: "W", x: 14, y: 50 }, { role: "CM", label: "CM", x: 38, y: 46 }, { role: "CM", label: "CM", x: 62, y: 46 }, { role: "W", label: "W", x: 86, y: 50 },
      { role: "ST", label: "ST", x: 38, y: 84 }, { role: "ST", label: "ST", x: 62, y: 84 }
    ]},
    { name: "3-5-2", tags: ["possession", "defensive"], blurb: "A back three with wing backs providing width, a crowded midfield to dominate possession, two forwards up top.", slots: [
      { role: "GK", label: "GK", x: 50, y: 5 },
      { role: "CB", label: "CB", x: 26, y: 18 }, { role: "CB", label: "CB", x: 50, y: 14 }, { role: "CB", label: "CB", x: 74, y: 18 },
      { role: "FB", label: "FB", x: 8, y: 44 }, { role: "CDM", label: "CDM", x: 38, y: 42 }, { role: "CM", label: "CM", x: 62, y: 42 }, { role: "FB", label: "FB", x: 92, y: 44 },
      { role: "CAM", label: "CAM", x: 50, y: 62 },
      { role: "ST", label: "ST", x: 38, y: 86 }, { role: "ST", label: "ST", x: 62, y: 86 }
    ]},
    { name: "4-1-4-1", tags: ["press", "balanced"], blurb: "A single defensive midfielder screens the back four while a busy midfield four provides width and combination play in front, with one striker as the outlet.", slots: [
      { role: "GK", label: "GK", x: 50, y: 5 },
      { role: "FB", label: "FB", x: 14, y: 20 }, { role: "CB", label: "CB", x: 37, y: 15 }, { role: "CB", label: "CB", x: 63, y: 15 }, { role: "FB", label: "FB", x: 86, y: 20 },
      { role: "CDM", label: "CDM", x: 50, y: 38 },
      { role: "W", label: "W", x: 16, y: 58 }, { role: "CM", label: "CM", x: 38, y: 56 }, { role: "CM", label: "CM", x: 62, y: 56 }, { role: "W", label: "W", x: 84, y: 58 },
      { role: "ST", label: "ST", x: 50, y: 88 }
    ]},
    { name: "5-3-2", tags: ["defensive"], blurb: "A back five for maximum defensive solidity, a compact midfield three, and two forwards who can hold the ball up and break quickly.", slots: [
      { role: "GK", label: "GK", x: 50, y: 5 },
      { role: "FB", label: "FB", x: 8, y: 22 }, { role: "CB", label: "CB", x: 28, y: 16 }, { role: "CB", label: "CB", x: 50, y: 13 }, { role: "CB", label: "CB", x: 72, y: 16 }, { role: "FB", label: "FB", x: 92, y: 22 },
      { role: "CM", label: "CM", x: 30, y: 50 }, { role: "CM", label: "CM", x: 50, y: 48 }, { role: "CM", label: "CM", x: 70, y: 50 },
      { role: "ST", label: "ST", x: 38, y: 86 }, { role: "ST", label: "ST", x: 62, y: 86 }
    ]}
  ]
};

export function pickFormation(format, objective) {
  const list = FORMATIONS[format] || [];
  const match = list.find((f) => f.tags.includes(objective));
  return match || list.find((f) => f.tags.includes("balanced")) || list[0];
}

export function assignRosterToFormation(formation, roster) {
  if (!formation) return [];
  const remaining = [...roster];
  return formation.slots.map((slot, i) => {
    const posDef = POSITIONS.find((p) => p.id === slot.role);
    if (!remaining.length || !posDef) return { ...slot, player: null, slotKey: `${slot.role}-${i}` };
    let bestIdx = -1;
    let bestScore = -Infinity;
    remaining.forEach((pl, idx) => {
      const sc = scorePlayerForPosition(pl, posDef);
      if (sc > bestScore) { bestScore = sc; bestIdx = idx; }
    });
    const chosen = bestIdx >= 0 ? remaining.splice(bestIdx, 1)[0] : null;
    return { ...slot, player: chosen, slotKey: `${slot.role}-${i}` };
  });
}

export function pickDrill(pool, usedIds) {
  const fresh = pool.filter((d) => !usedIds.has(d.id));
  const list = fresh.length ? fresh : pool;
  if (!list.length) return null;
  return list[Math.floor(Math.random() * list.length)];
}

export function inferStyles(d) {
  if (d.styles) return d.styles;
  const s = new Set();
  if (d.focus.includes("possession") || d.formation === "circle") s.add("positional");
  if (d.focus.includes("passing") || /wall pass|combin|give and go|overlap|third-man/i.test(d.name)) s.add("combination");
  if (d.focus.includes("defending") || d.focus.includes("fitness") || /duel|press|tackle/i.test(d.name)) s.add("physical");
  if (s.size === 0) s.add("positional");
  return Array.from(s);
}

export function filterDrills(category, focus, age, skill, style, gameFormat) {
  let pool = DRILLS.filter(
    (d) => d.category === category && age >= d.ageMin && age <= d.ageMax && d.skills.includes(skill)
  );
  const focusArr = focus ? (Array.isArray(focus) ? focus : [focus]) : null;
  if (focusArr && focusArr.length) {
    const focused = pool.filter((d) => d.focus.some((f) => focusArr.includes(f)));
    if (focused.length) pool = focused;
  }
  if (style && style !== "blend") {
    const styled = pool.filter((d) => inferStyles(d).includes(style));
    if (styled.length) pool = styled;
  }
  if (category === "ssg" && gameFormat) {
    const formatted = pool.filter((d) => !d.formats || d.formats.includes(gameFormat));
    if (formatted.length) pool = formatted;
  }
  if (!pool.length) {
    pool = DRILLS.filter((d) => d.category === category && age >= d.ageMin && age <= d.ageMax);
  }
  if (!pool.length) {
    pool = DRILLS.filter((d) => d.category === category);
  }
  return pool;
}

export function roundTo5(n) {
  return Math.max(5, Math.round(n / 5) * 5);
}

export function generatePlan({ age, skill, focuses, duration, style, gameFormat }) {
  const foci = focuses && focuses.length ? focuses : ["possession"];
  const warmupPct = duration <= 45 ? 0.16 : 0.12;
  const cooldownPct = duration <= 45 ? 0.14 : 0.12;
  const remainderPct = 1 - warmupPct - cooldownPct;
  const ssgPct = remainderPct * (foci.length >= 2 ? 0.34 : 0.42);
  const mainTotalPct = remainderPct - ssgPct;
  const mainEachPct = mainTotalPct / foci.length;

  const segments = [{ key: "warmup", category: "warmup", focus: null, pct: warmupPct }];
  foci.forEach((f, i) => {
    segments.push({ key: `main-${i}-${f}`, category: "technical", focus: f, pct: mainEachPct });
  });
  segments.push({ key: "ssg", category: "ssg", focus: foci, pct: ssgPct });
  segments.push({ key: "cooldown", category: "cooldown", focus: null, pct: cooldownPct });

  let minutesList = segments.map((s) => roundTo5(duration * s.pct));
  let diff = duration - minutesList.reduce((a, b) => a + b, 0);
  const ssgIdx = segments.findIndex((s) => s.key === "ssg");
  minutesList[ssgIdx] = Math.max(5, minutesList[ssgIdx] + diff);

  const usedIds = new Set();
  const items = segments.map((seg, i) => {
    const pool = filterDrills(seg.category, seg.focus, age, skill, style, gameFormat);
    const drill = pickDrill(pool, usedIds);
    if (drill) usedIds.add(drill.id);
    return { ...seg, minutes: minutesList[i], drill };
  }).filter((it) => it.drill);

  const total = items.reduce((a, it) => a + it.minutes, 0);
  if (total !== duration && items.length) {
    items[items.length - 1].minutes += duration - total;
  }

  return items;
}
