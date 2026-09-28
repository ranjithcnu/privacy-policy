window.DETAILS = Object.assign(window.DETAILS || {}, {
  "architecture": {
    "intro":"Computer Architecture becomes easier when you picture data flowing through a machine: input arrives, the CPU fetches and executes instructions using registers/cache/RAM, buses move information, and results are stored or sent to output.",
    "concepts":[
      {"title":"CPU roles","body":"The ALU performs arithmetic and logical operations. The Control Unit coordinates the fetch-decode-execute cycle. Registers are tiny, very fast storage locations inside or extremely close to the CPU."},
      {"title":"Memory hierarchy","body":"A useful order is registers → cache → RAM → secondary storage. As you move down, capacity generally increases while speed decreases and latency increases."},
      {"title":"Buses and instruction cycle","body":"The address bus identifies locations, the data bus carries values, and control signals coordinate operations. A basic instruction cycle is fetch → decode → execute → store/result."}
    ],
    "worked":{"problem":"Which is normally closest to the CPU core: SSD, RAM, cache or HDD?","steps":["Identify the hierarchy.","Cache is designed to hold frequently used instructions/data closer to the CPU than RAM or storage."],"result":"Cache."},
    "memory":["ALU calculates; CU coordinates; registers hold immediate values.","Registers → cache → RAM → storage."],
    "ready":["You can explain ALU, CU, registers and buses by function.","You can order common memory layers by speed and role."]
  },
  "assembly": {
    "intro":"PC assembling and troubleshooting should be solved as diagnosis, not random replacement. Work from the earliest possible failure layer upward: power → POST/hardware → storage/boot → OS → application.",
    "concepts":[
      {"title":"Match symptom to layer","body":"If there is no power, the OS is irrelevant. If POST completes but no boot device is found, focus on storage detection, cabling and boot configuration before reinstalling software."},
      {"title":"Prefer safe first checks","body":"Competitive questions often ask the best first action. Choose reversible diagnostics—power/cables, firmware detection, logs, known-good components—before destructive actions such as formatting."},
      {"title":"Malware distinctions","body":"A virus commonly attaches to files, a worm self-spreads, a Trojan disguises itself as legitimate software, and ransomware encrypts or locks data to demand payment."}
    ],
    "worked":{"problem":"The PC powers on but firmware cannot detect the SSD. What should be checked first?","steps":["Power stage is working.","The failure occurs before the OS.","Check drive power/data connection and firmware detection."],"result":"Investigate storage connection/detection before reinstalling Windows."},
    "memory":["Power → POST → boot device → OS → application.","Diagnose before replacing."],
    "ready":["You can map common symptoms to a subsystem.","You distinguish virus, worm, Trojan and ransomware."]
  },
  "memory": {
    "intro":"Memory and storage questions mix several technologies. Classify each by volatility, speed, capacity, location and purpose. RAID adds a separate question: performance versus redundancy.",
    "concepts":[
      {"title":"Volatile vs non-volatile","body":"Registers, cache and RAM normally lose working contents without power. ROM, flash, SSD and HDD retain data."},
      {"title":"Cache vs RAM","body":"Cache is smaller and faster and reduces CPU waiting. RAM is the larger working area for active programs and data."},
      {"title":"RAID trade-offs","body":"RAID 0 stripes for speed/capacity with no redundancy. RAID 1 mirrors. RAID 5 uses distributed parity with at least three drives. RAID 6 uses dual parity. RAID improves availability but is not a substitute for backup."}
    ],
    "worked":{"problem":"Two 1 TB drives in RAID 1. Approximate usable capacity?","steps":["RAID 1 stores mirrored copies.","The second drive duplicates the first."],"result":"About 1 TB usable with redundancy."},
    "memory":["Volatile working memory vs persistent storage.","RAID 0 speed, RAID 1 mirror, RAID 5 parity."],
    "ready":["You can explain cache vs RAM.","You do not confuse RAID with backup."]
  },
  "peripherals": {
    "intro":"Peripheral questions are classification questions. Ask what information flows into or out of the computer and what the device's primary role is.",
    "concepts":[
      {"title":"Input and output","body":"Keyboard, mouse, scanner and microphone provide input. Monitor, printer and speakers provide output. Touchscreens perform both."},
      {"title":"Interfaces","body":"USB, HDMI, DisplayPort, audio connectors and network interfaces serve different data, display, audio or connectivity purposes. Do not confuse a connector with the device itself."}
    ],
    "worked":{"problem":"Why is a touchscreen both input and output?","steps":["The display presents visual output.","The touch sensor captures user interaction as input."],"result":"It performs both directions of interaction."},
    "memory":["Ask: data enters, leaves, or both?","Primary function beats appearance."],
    "ready":["You can classify common peripherals instantly.","You know the role of PSU, NIC, display, printer and scanner."]
  },
  "os": {
    "intro":"An operating system manages resources and provides services to applications. Organise the topic into processes, memory, files, devices, users/security and interfaces.",
    "concepts":[
      {"title":"Program, process, thread","body":"A program is stored code. A process is a running instance with runtime state/resources. A thread is an execution path within a process and may share memory with other threads."},
      {"title":"Memory management","body":"The OS allocates RAM, protects address spaces and may use virtual memory backed partly by storage. Heavy paging is much slower than RAM access."},
      {"title":"Kernel and user space","body":"The kernel performs privileged resource management. User applications normally request services through controlled interfaces rather than directly manipulating hardware."}
    ],
    "worked":{"problem":"An executable exists on disk but has not been launched. Is it a process?","steps":["Stored executable = program.","A process exists only after execution begins and runtime state is created."],"result":"No; it is a program until running."},
    "memory":["Program stored; process running; thread executes.","OS = resource manager."],
    "ready":["You distinguish program/process/thread.","You can explain virtual memory conceptually."]
  },
  "windows": {
    "intro":"Windows questions are easiest when you match the symptom to the administrative tool rather than memorising menu paths.",
    "concepts":[
      {"title":"Task Manager vs Device Manager vs Services","body":"Task Manager focuses on processes/performance/startup. Device Manager focuses on hardware and drivers. Services manages background service state and startup."},
      {"title":"Logs and maintenance","body":"Event Viewer records system, application and security events that help correlate failures with time. Use the least invasive appropriate tool first."},
      {"title":"Privilege separation","body":"Administrator privileges allow system-wide changes. Standard-user operation reduces accidental or malicious modification risk."}
    ],
    "worked":{"problem":"A network adapter shows an error immediately after a driver update. Which tool is most directly relevant?","steps":["The symptom points to hardware/driver state.","Device Manager exposes device status and driver controls."],"result":"Device Manager."},
    "memory":["Process/performance → Task Manager.","Hardware/driver → Device Manager. Service state → Services."],
    "ready":["You choose tools by subsystem.","You diagnose before destructive fixes."]
  },
  "dbms": {
    "intro":"DBMS questions combine data modelling, keys, normalization, SQL and transactions. Learn each idea by the problem it solves rather than by memorising definitions.",
    "concepts":[
      {"title":"Keys and relationships","body":"A primary key uniquely identifies a row. A candidate key is any minimal attribute set capable of uniquely identifying a row. A foreign key references a key in another table to represent relationships."},
      {"title":"Normalization","body":"Normalization reduces avoidable redundancy and update anomalies by separating data according to dependencies. The point is not to create many tables blindly, but to store each fact in an appropriate place."},
      {"title":"SQL filtering and grouping","body":"WHERE filters rows before grouping. GROUP BY forms groups. HAVING filters groups after aggregation. ORDER BY affects presentation order."},
      {"title":"Transactions and ACID","body":"Atomicity means all-or-nothing, Consistency preserves valid rules, Isolation controls interaction among concurrent transactions, and Durability preserves committed results."}
    ],
    "worked":{"problem":"You need only departments whose average salary exceeds ₹50,000. WHERE or HAVING?","steps":["Average salary is an aggregate over each department.","The condition applies after GROUP BY.","Use HAVING for the aggregate condition."],"result":"GROUP BY department HAVING AVG(salary) > 50000."},
    "memory":["PK identifies; FK links.","WHERE rows; HAVING groups.","ACID = Atomicity, Consistency, Isolation, Durability."],
    "ready":["You can distinguish keys and relationships.","You can reason through SELECT/GROUP BY/HAVING questions."]
  },
  "word": {
    "intro":"MS Word is easier when features are grouped by task: editing, formatting, page layout, review, references and mail merge.",
    "concepts":[
      {"title":"Styles vs manual formatting","body":"Styles apply a reusable formatting definition, making long documents consistent and easier to change globally. Manual formatting changes individual text directly."},
      {"title":"Headers, footers and sections","body":"Headers/footers repeat page information; margins define page content space; section breaks allow different layouts within the same document."},
      {"title":"Mail Merge","body":"Mail Merge combines one template with a recipient data source to create personalized letters, labels or emails."}
    ],
    "worked":{"problem":"Send the same appointment letter to 500 people with different names and addresses.","steps":["Create one template.","Connect the recipient data source.","Insert merge fields.","Complete the merge."],"result":"Use Mail Merge."},
    "memory":["Styles = consistent formatting.","Mail Merge = template + data source."],
    "ready":["You know high-frequency shortcuts.","You choose Word features by task."]
  },
  "excel": {
    "intro":"Excel questions frequently test cell references, functions and data tools. The critical skill is understanding what changes when a formula is copied.",
    "concepts":[
      {"title":"Relative, absolute and mixed references","body":"A1 changes row and column. $A$1 locks both. A$1 locks the row. $A1 locks the column. The dollar sign locks the part immediately following it."},
      {"title":"Common functions","body":"SUM adds, AVERAGE calculates mean, COUNT counts numeric cells, COUNTA counts non-empty cells, and IF returns results based on a condition."},
      {"title":"Sort, Filter and Pivot","body":"Sort changes order, Filter controls which rows are displayed, and PivotTables summarize/group data without manually building many formulas."}
    ],
    "worked":{"problem":"Formula =$A1*B$2 is copied one column right and one row down.","steps":["$A keeps column A while relative row 1 becomes 2.","Relative column B becomes C while $2 keeps row 2."],"result":"=$A2*C$2"},
    "memory":["Dollar locks what follows.","Sort reorders; Filter selects visibility; Pivot summarizes."],
    "ready":["You can mentally move mixed references.","You know when to use SUM, COUNT, COUNTA, AVERAGE and IF."]
  },
  "powerpoint": {
    "intro":"PowerPoint questions mainly distinguish presentation-level, slide-level and object-level features.",
    "concepts":[
      {"title":"Transition vs animation","body":"A transition controls how one slide changes to another. An animation controls how an object on a slide enters, moves, emphasizes or exits."},
      {"title":"Slide Master","body":"Slide Master controls repeated design and layout elements across many slides, avoiding repetitive manual editing."},
      {"title":"Presentation shortcuts","body":"F5 generally starts the slide show from the beginning; Shift+F5 starts from the current slide."}
    ],
    "worked":{"problem":"A company logo must appear consistently on every slide.","steps":["The logo is a repeated presentation-wide design element.","Use Slide Master instead of manually pasting on each slide."],"result":"Slide Master."},
    "memory":["Between slides = transition; on object = animation.","Repeated layout = master."],
    "ready":["You classify features by scope.","You know common slideshow-start shortcuts."]
  },
  "access": {
    "intro":"MS Access is a relational database environment. Remember its main objects by job: tables store, queries retrieve/transform, forms enter/display, reports present/print.",
    "concepts":[
      {"title":"Tables and relationships","body":"Tables contain records and fields. Primary and foreign keys connect related data while controlling duplication."},
      {"title":"Queries","body":"Queries filter, join, calculate or summarize data dynamically without necessarily duplicating base records."},
      {"title":"Forms and reports","body":"Forms support user-friendly data entry and display. Reports are optimized for formatted output, grouping and printing."}
    ],
    "worked":{"problem":"Create a printable monthly sales summary by region without making a new permanent table.","steps":["Use a query to select/group the data.","Use a report to format it for output."],"result":"Query + Report."},
    "memory":["Table stores; Query asks; Form enters; Report presents.","Keys create relationships."],
    "ready":["You choose Access objects from task descriptions.","You understand queries can combine tables."]
  },
  "networking": {
    "intro":"Networking becomes manageable when every device/protocol is mapped to a layer and purpose: signals, frames, IP routing, transport or application service.",
    "concepts":[
      {"title":"Layer thinking","body":"Physical handles signals/media, Data Link handles frames/MAC local delivery, Network handles IP and routing, Transport handles TCP/UDP, and application protocols provide services such as HTTP and DNS."},
      {"title":"Switch vs router","body":"A switch mainly forwards frames within a LAN using MAC information. A router connects different IP networks and forwards packets according to routing information."},
      {"title":"DNS and DHCP","body":"DNS maps names to addresses. DHCP supplies configuration such as IP address, mask, gateway and DNS server."},
      {"title":"Common ports","body":"High-frequency ports include HTTP 80, HTTPS 443, DNS 53 and SMTP 25. Memorise each with the protocol's purpose."}
    ],
    "worked":{"problem":"A PC reaches 8.8.8.8 but cannot open websites by name. Which service is most suspect?","steps":["Numeric IP connectivity works.","Name-to-address resolution is failing.","That is DNS functionality."],"result":"Check DNS."},
    "memory":["MAC/switch = local LAN; IP/router = between networks.","DNS names; DHCP configuration."],
    "ready":["You can place common devices/protocols by layer.","You distinguish DNS failure from general connectivity failure."]
  },
  "security": {
    "intro":"Security questions become easier when each control is tied to a specific goal. Authentication, authorization, encryption, hashing, firewalls, antivirus and VPNs solve different problems.",
    "concepts":[
      {"title":"CIA triad","body":"Confidentiality limits unauthorized disclosure, Integrity protects against unauthorized alteration, and Availability keeps systems/data accessible when needed."},
      {"title":"Authentication vs authorization","body":"Authentication establishes identity—who are you? Authorization decides permissions—what may you do?"},
      {"title":"Encryption vs hashing","body":"Encryption is reversible with the correct key and mainly protects confidentiality. Cryptographic hashing is designed as a one-way digest used for integrity checks and password verification."},
      {"title":"Network and endpoint controls","body":"A firewall filters traffic, antivirus/endpoint protection targets malicious software, and a VPN creates a protected logical tunnel over another network."}
    ],
    "worked":{"problem":"A user logs in successfully but cannot access an admin page. Authentication or authorization?","steps":["Identity was accepted, so authentication succeeded.","The remaining issue is whether the user has permission."],"result":"Authorization issue."},
    "memory":["AuthN = identity; AuthZ = permission.","Hash one-way; encryption reversible with key.","Firewall traffic; antivirus malware; VPN tunnel."],
    "ready":["You classify controls by security purpose.","You reject absolute claims such as one control protecting against every threat."]
  }
});
