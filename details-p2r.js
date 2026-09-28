window.DETAILS = Object.assign(window.DETAILS || {}, {
  "analogy": {
    "intro": "Analogy tests whether you can detect the exact relationship between two items and reproduce the same relationship in another pair. The key is to name the relation before looking for an answer.",
    "concepts": [
      {"title":"Relationship must preserve direction","body":"Doctor:hospital is not the same directional relation as hospital:doctor. Check who belongs to what, what performs what function, or what causes what."},
      {"title":"Use the strongest specific relation","body":"If “bird:nest” is the pair, “bee:hive” matches home relationship more precisely than an option merely connecting two living things."}
    ],
    "worked":{"problem":"Book : Author :: Painting : ?","steps":["A book is created by an author.","Need the creator of a painting."],"result":"Artist."},
    "memory":["Say the relationship in a sentence.","Preserve both relation and direction."],
    "ready":["You test function, part-whole, cause-effect, degree and category.","You avoid vague similarities."]
  },
  "similarity": {
    "intro":"Similarity and difference questions are classification problems. Instead of asking “which looks odd?”, identify a rule shared by three items and absent in one.",
    "concepts":[
      {"title":"Test simple properties first","body":"Check category, function, count, spelling pattern or numerical property before inventing a complex rule."},
      {"title":"The rule must fit all members","body":"A valid classification should explain every included option cleanly. If your rule needs exceptions, it is probably not the intended rule."}
    ],
    "worked":{"problem":"Triangle, square, rectangle, sphere — odd one?","steps":["Triangle, square and rectangle are 2D plane figures.","Sphere is a 3D solid."],"result":"Sphere."},
    "memory":["Shared property first, odd item second.","Prefer the simplest complete rule."],
    "ready":["You can state the shared property explicitly.","You do not choose based only on appearance."]
  },
  "spatial_visual": {
    "intro":"Spatial visualization asks you to mentally manipulate shapes, cubes, folds and rotations. The safest approach is to track one property at a time instead of imagining the entire transformation at once.",
    "concepts":[
      {"title":"Painted-cube formulas","body":"For an n×n×n cube painted on all six faces: 8 small cubes have three painted faces, 12(n−2) have exactly two, 6(n−2)² have exactly one, and (n−2)³ have none."},
      {"title":"Rotation preserves structure","body":"A rigid rotation changes orientation but not side lengths, adjacency or the identity of opposite faces. Fix one reference face or edge and track others relative to it."},
      {"title":"Paper folding works backward","body":"When holes/cuts are made after folding, unfold in reverse order and mirror the cut across each fold line."}
    ],
    "worked":{"problem":"A cube is cut into 5 pieces along each edge after all faces are painted. How many small cubes have no paint?","steps":["n=5.","Interior cubes per edge = n−2 = 3.","Unpainted = 3³."],"result":"27."},
    "memory":["Painted cube formulas save several minutes.","Track adjacency, not screen position."],
    "ready":["You can solve basic painted-cube counts instantly.","You sketch when mental rotation becomes uncertain."]
  },
  "spatial_orientation": {
    "intro":"Direction questions are easiest on a coordinate grid. Treat east/west as horizontal movement and north/south as vertical movement; then calculate the net displacement.",
    "concepts":[
      {"title":"Coordinates prevent turn confusion","body":"Assign east +x, west −x, north +y, south −y. After each movement update coordinates. Final direction comes from the signs of x and y."},
      {"title":"Facing direction changes after a turn","body":"A left or right turn is relative to the person’s current facing direction, not the page. Update facing before applying the next movement."}
    ],
    "worked":{"problem":"Move 3 km east, 4 km north. Distance and direction from start?","steps":["Net x=+3, y=+4.","Distance=√(3²+4²)=5.","Both coordinates positive → north-east."],"result":"5 km north-east."},
    "memory":["Coordinates first, Pythagoras last.","Turn changes facing before movement."],
    "ready":["You can track multi-turn paths without redrawing everything.","You can determine quadrant before exact distance."]
  },
  "problem_solving": {
    "intro":"Problem-solving questions reward structured representation. Convert words into slots, symbols, tables or equations so that your working memory is not carrying all constraints at once.",
    "concepts":[
      {"title":"Start with the strongest constraint","body":"A statement such as “A sits immediately left of B” places two items at once and is usually more useful than a vague statement such as “C is somewhere left of D”."},
      {"title":"Use options strategically","body":"If building the full arrangement is long, test answer choices against the constraints. One contradiction is enough to eliminate an option."}
    ],
    "worked":{"problem":"Five people stand in a row; A is immediately left of B and C is at one end.","steps":["Treat AB as one block first.","Place C at an end.","Use remaining conditions to position the block and others."],"result":"A compact slot method avoids repeatedly rereading the sentence."},
    "memory":["Externalize constraints.","Most restrictive clue first."],
    "ready":["You draw a reusable base diagram for linked questions.","You do not add unstated assumptions."]
  },
  "analysis": {
    "intro":"Analysis questions test logical necessity. The exam often gives a statement and asks what follows, what is assumed or whether a relationship is valid. Your job is to distinguish certainty from possibility.",
    "concepts":[
      {"title":"Implication is one-way","body":"If A implies B, you may conclude B when A occurs, but you cannot automatically conclude A from B. Reversing an implication is one of the most common traps."},
      {"title":"Counterexample method","body":"To test whether a conclusion must follow, try to imagine one valid case where the statements are true but the conclusion is false. If such a case exists, the conclusion is not necessary."}
    ],
    "worked":{"problem":"All programmers are graduates. Ravi is a graduate. Must Ravi be a programmer?","steps":["Statement gives Programmer → Graduate.","Ravi is Graduate does not reverse the arrow.","He could be a graduate in another profession."],"result":"No definite conclusion that Ravi is a programmer."},
    "memory":["Must follow, not may follow.","Never reverse an arrow without evidence."],
    "ready":["You can reject a conclusion with a valid counterexample.","You separate facts from assumptions."]
  },
  "judgment": {
    "intro":"Judgment/data-sufficiency questions ask whether the provided information is enough to reach a unique conclusion. Often you do not need the final numerical value; you only need to prove whether it can be determined.",
    "concepts":[
      {"title":"Test statements independently","body":"Check statement I alone, then statement II alone, then combine only if necessary. Mixing them too early makes sufficiency questions slower."},
      {"title":"Unique answer is the goal","body":"Information is sufficient only when it produces one determinate answer. A range of possible answers means insufficiency even if you learned something useful."}
    ],
    "worked":{"problem":"What is x? I: x+y=10. II: y=4.","steps":["I alone gives many x,y pairs → insufficient.","II alone gives y only → insufficient.","Together x=6 uniquely."],"result":"Both statements together are sufficient."},
    "memory":["Sufficiency ≠ full calculation.","Stop when uniqueness is proven."],
    "ready":["You check I and II separately.","You stop once sufficiency is established."]
  },
  "decision": {
    "intro":"Decision-making questions ask for an action or conclusion that is reasonable given the stated facts. The best answer is usually the one that directly addresses the problem without assuming information that was never provided.",
    "concepts":[
      {"title":"Stay inside the case","body":"Do not import your personal knowledge or preferences unless the question invites them. An option can sound sensible in real life but still be unsupported by the case."},
      {"title":"Prefer proportionate action","body":"Extreme actions are often distractors when a simpler, directly relevant step would solve the stated problem."}
    ],
    "worked":{"problem":"A system is intermittently slow after a recent change. Which first action is best?","steps":["Do not immediately replace hardware without evidence.","Check logs/metrics and compare before/after the change.","Choose the reversible diagnostic step first."],"result":"Investigate evidence before destructive action."},
    "memory":["Supported, direct, proportionate.","Do not solve a different problem than the one stated."],
    "ready":["You can explain what assumption each wrong option adds.","You prefer evidence-gathering before irreversible action."]
  },
  "visual_memory": {
    "intro":"Visual-memory questions are easier when you encode structure instead of trying to store a perfect mental photograph. Chunk the image into zones and attach distinctive features to fixed positions.",
    "concepts":[
      {"title":"Chunking","body":"Divide a dense figure into top/middle/bottom or a 3×3 mental grid. Remember two or three features per zone rather than ten isolated symbols."},
      {"title":"Anchor distinctive items","body":"Start with unusual shapes, colours or orientations, then remember nearby items relative to those anchors."}
    ],
    "worked":{"problem":"You see nine symbols in a 3×3 grid for five seconds.","steps":["Encode centre first, then four corners, then remaining edge positions.","Use labels such as “star top-left, triangle centre”.","On recall, rebuild the grid rather than the image."],"result":"Structured recall is more reliable than trying to remember the picture as a whole."},
    "memory":["Grid, anchors, relations.","Scan systematically once before staring at details."],
    "ready":["You can use the same scan order every time.","You recall positions relative to anchors."]
  }
});
