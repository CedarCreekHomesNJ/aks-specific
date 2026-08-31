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
  }
];

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
