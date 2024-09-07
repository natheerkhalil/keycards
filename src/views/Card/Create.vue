<template>
    <div class="__15 __w __mlauto __mrauto _flex _fd-co">
        <p class="__b __tal __txl">Create Cards for <strong>Biology</strong></p>

        <br>

        <div class="__b _flex _jc-en">
            <div @click="createFolder" class="create-btn _m-xs-b _m-xs-cc __padxs _flex __hv __hv-4 __bd-4 __bod _fd-ro __bg-none __po">
                <p class="__txt-3">Create Folder</p>
            </div>
        </div></div>
</template>

<script>

export default {
    methods: {
        createFolder() {
            console.log('Folder created successfully');
        }
    },

    created() {
        this.cards = [{ q: "What is the process of photosynthesis?", a: "Photosynthesis is the process by which green plants, algae, and some bacteria convert sunlight into glucose, carbon dioxide, and water. This process takes place in the chloroplasts of plant cells.", status: "1", id: 609240 },

{ q: "What is the significance of photosynthesis in the ecosystem?", a: "Photosynthesis plays a crucial role in maintaining the balance of the ecosystem by providing essential nutrients for all organisms, supporting the growth and reproduction of plants and animals, and contributing to the overall health of the environment.", status: "0", id: 804205 },

{ q: "What is the role of chloroplasts in photosynthesis?", a: "Chloroplasts are the organelles that contain the enzymes and proteins necessary for photosynthesis. They are located in the thylakoid membranes of plant cells, and they contain three types of chlorophyll molecules: green, red, and blue.", status: "2", id: 497738 },

{ q: "What is the significance of chlorophyll in photosynthesis?", a: "Chlorophyll is a pigment found in the chloroplasts of plant cells. It absorbs light energy in the blue and red wavelengths, and it helps to convert light energy into chemical energy in the form of glucose. Chlorophyll plays a crucial role in the process of photosynthesis by facilitating the transfer of energy from sunlight to the organic molecules of glucose and oxygen.", status: "2", id: 277716 },

{ q: "How does the process of photosynthesis occur?", a: "The process of photosynthesis begins when sunlight reaches the chloroplasts of plant cells. Inside the chloroplasts, the enzymes and proteins necessary for photosynthesis are present. Chlorophyll absorbs light energy in the blue and red wavelengths, and it helps to convert light energy into chemical energy in the form of glucose. The glucose is then used to produce ATP, which is used to drive the synthesis of other organic molecules.", status: "1", id: 716493 },

{ q: "What is the significance of the Calvin Cycle in photosynthesis?", a: "The Calvin Cycle is a series of enzymatic reactions that occur in the thylakoid membranes of plant cells to convert carbon dioxide and sunlight energy into glucose and oxygen. The Calvin Cycle is responsible for the synthesis of ATP from ADP and NADPH, and it also plays a role in the production of NADP+ and FADH2.", status: "0", id: 895543 },

{ q: "What is the role of water in photosynthesis?", a: "Water plays a crucial role in photosynthesis by providing the necessary energy for the synthesis of glucose and oxygen. During the process of photosynthesis, water is broken down into hydrogen ions and oxygen gas, and it is released into the atmosphere as carbon dioxide and water vapor. The oxygen gas is used to produce ATP and NADPH, and the hydrogen ions are used to power the Calvin Cycle.", status: "1", id: 981757 },

{ q: "What is the significance of water in photosynthesis?", a: "Water plays a crucial role in photosynthesis by providing the necessary energy for the synthesis of glucose and oxygen. During the process of photosynthesis, water is broken down into hydrogen ions and oxygen gas, and it is released into the atmosphere as carbon dioxide and water vapor. The oxygen gas is used to produce ATP and NADPH, and the hydrogen ions are used to power the Calvin Cycle.", status: "2", id: 531122 },

{ q: "What are the primary stages of photosynthesis?", a: "Photosynthesis occurs in two main stages: the light-dependent reactions and the Calvin Cycle. The light-dependent reactions take place in the thylakoid membranes, where sunlight is absorbed and converted into chemical energy, while the Calvin Cycle synthesizes glucose.", status: "0", id: 603845 },

{ q: "What are light-dependent reactions in photosynthesis?", a: "Light-dependent reactions are the first stage of photosynthesis. In these reactions, chlorophyll absorbs sunlight, which splits water molecules into oxygen, hydrogen ions, and electrons. The energy generated is used to produce ATP and NADPH.", status: "1", id: 395475 },

{ q: "What is the role of ATP in photosynthesis?", a: "ATP provides the energy needed to fuel the chemical reactions in the Calvin Cycle, which produces glucose from carbon dioxide and water.", status: "2", id: 105400 },

{ q: "How does carbon dioxide affect photosynthesis?", a: "Carbon dioxide is one of the reactants in photosynthesis. It is absorbed by plants from the atmosphere and used in the Calvin Cycle to produce glucose.", status: "0", id: 739367 },

{ q: "What are the byproducts of photosynthesis?", a: "The main byproducts of photosynthesis are oxygen, which is released into the atmosphere, and glucose, which is used by the plant for energy and growth.", status: "1", id: 979105 },

{ q: "How do environmental factors impact the rate of photosynthesis?", a: "Environmental factors such as light intensity, temperature, and carbon dioxide concentration affect the rate of photosynthesis. Higher light intensity and carbon dioxide levels increase the rate, while extreme temperatures can inhibit the process.", status: "2", id: 14736 },

{ q: "Why is photosynthesis important for the carbon cycle?", a: "Photosynthesis is a key part of the carbon cycle because it removes carbon dioxide from the atmosphere and converts it into organic molecules like glucose, which can be used by other organisms.", status: "0", id: 822630 },

{ q: "What role does NADPH play in photosynthesis?", a: "NADPH provides the reducing power necessary for the synthesis of glucose in the Calvin Cycle, transferring electrons and hydrogen ions from the light-dependent reactions.", status: "1", id: 822836 },

{ q: "What is the significance of stomata in photosynthesis?", a: "Stomata are small openings on the surface of leaves that allow the exchange of gases, including the intake of carbon dioxide and the release of oxygen, which are essential for photosynthesis.", status: "0", id: 625604 },

{ q: "How do plants adapt to low light conditions for photosynthesis?", a: "Plants adapt to low light conditions by increasing the amount of chlorophyll in their leaves, adjusting the orientation of leaves to maximize light absorption, or developing larger leaves to capture more light.", status: "1", id: 230957 },

{ q: "What is the relationship between photosynthesis and cellular respiration?", a: "Photosynthesis and cellular respiration are complementary processes. Photosynthesis converts carbon dioxide and water into glucose and oxygen, while cellular respiration breaks down glucose and oxygen to produce carbon dioxide, water, and energy (ATP).", status: "2", id: 715097 },

{ q: "What pigments are involved in photosynthesis besides chlorophyll?", a: "Other pigments involved in photosynthesis include carotenoids and phycobilins. Carotenoids help absorb light in the blue-green spectrum, while phycobilins capture light energy in red and blue-green wavelengths.", status: "0", id: 190894 },

{ q: "How does temperature influence photosynthesis?", a: "Temperature affects the enzymes involved in photosynthesis. Optimal temperatures promote faster reactions, but extreme temperatures (either too high or too low) can inhibit enzyme activity and slow down or stop photosynthesis.", status: "1", id: 16162 },

{ q: "What is photorespiration and how does it differ from photosynthesis?", a: "Photorespiration occurs when oxygen, rather than carbon dioxide, is fixed by the enzyme RuBisCO, leading to a reduction in the efficiency of photosynthesis and the production of less glucose.", status: "2", id: 83222 },

{ q: "What is the role of RuBisCO in the Calvin Cycle?", a: "RuBisCO is an enzyme that catalyzes the first step of the Calvin Cycle, where carbon dioxide is fixed into an organic molecule. It plays a key role in the process of carbon fixation.", status: "0", id: 155196 },

{ q: "How do C4 plants differ from C3 plants in photosynthesis?", a: "C4 plants have a specialized mechanism to minimize photorespiration by concentrating carbon dioxide in specialized cells, allowing them to thrive in hot, dry environments. C3 plants, on the other hand, directly fix carbon dioxide through the Calvin Cycle.", status: "1", id: 487022 },

{ q: "What are CAM plants and how do they photosynthesize?", a: "CAM plants, such as cacti, open their stomata at night to reduce water loss in arid conditions. They store carbon dioxide as malic acid and use it for photosynthesis during the day when stomata are closed.", status: "2", id: 818771 },

{ q: "How does light intensity influence the rate of photosynthesis?", a: "As light intensity increases, the rate of photosynthesis also increases until it reaches a saturation point where the light-dependent reactions can no longer process more energy efficiently.", status: "0", id: 50342 },

{ q: "What is the light saturation point in photosynthesis?", a: "The light saturation point is the intensity at which further increases in light do not result in a higher rate of photosynthesis. This is because all available chlorophyll molecules are already being used.", status: "1", id: 386962 },

{ q: "How do plants regulate water loss during photosynthesis?", a: "Plants regulate water loss through their stomata, which can open and close to control the exchange of gases. In hot or dry conditions, stomata may close to conserve water, but this also reduces the intake of carbon dioxide.", status: "2", id: 342025 },

{ q: "Why is glucose produced during photosynthesis important for plants?", a: "Glucose is the primary energy source for plants. It can be used immediately for cellular respiration to produce ATP or stored as starch for later use during periods of low light or high energy demand.", status: "0", id: 698009 },

{ q: "What are accessory pigments and their function in photosynthesis?", a: "Accessory pigments such as carotenoids and xanthophylls absorb wavelengths of light that chlorophyll cannot, broadening the spectrum of light a plant can use for photosynthesis.", status: "1", id: 446518 },

{ q: "How do plants store the energy produced during photosynthesis?", a: "Plants store energy produced during photosynthesis in the form of glucose. This glucose can be converted into starch, which is stored in plant tissues for later use.", status: "2", id: 187932 },

{ q: "What are the main differences between light-dependent and light-independent reactions?", a: "Light-dependent reactions occur in the thylakoid membranes and require sunlight to produce ATP and NADPH. Light-independent reactions (Calvin Cycle) use ATP and NADPH to synthesize glucose from carbon dioxide.", status: "0", id: 734200 },

{ q: "What happens to the oxygen produced during photosynthesis?", a: "The oxygen produced during photosynthesis is released into the atmosphere as a byproduct. This oxygen is essential for the survival of aerobic organisms, including humans.", status: "1", id: 41304 },

{ q: "Why do some plants appear to have red or purple leaves instead of green?", a: "Some plants contain higher concentrations of anthocyanin pigments, which give the leaves a red or purple color. These pigments can protect plants from UV radiation or herbivores, while still allowing photosynthesis to occur.", status: "2", id: 34976 },

{ q: "What are the limiting factors of photosynthesis?", a: "The limiting factors of photosynthesis include light intensity, carbon dioxide concentration, water availability, and temperature. If any of these factors are in short supply, the rate of photosynthesis can be reduced.", status: "0", id: 350260 },

{ q: "What is the primary function of the thylakoid membrane in photosynthesis?", a: "The thylakoid membrane is where the light-dependent reactions of photosynthesis take place, including the production of ATP and NADPH through the electron transport chain.", status: "0", id: 589901 },

{ q: "How does the structure of a leaf aid in photosynthesis?", a: "The structure of a leaf, with its broad, flat surface and numerous stomata, maximizes light absorption and gas exchange, which are essential for efficient photosynthesis.", status: "1", id: 237737 },

{ q: "What is the function of grana in the chloroplast?", a: "Grana are stacks of thylakoids within the chloroplasts. They increase the surface area for the light-dependent reactions of photosynthesis, enhancing the plant's ability to capture light.", status: "2", id: 803684 },

{ q: "How is ATP generated in photosynthesis?", a: "ATP is generated during the light-dependent reactions of photosynthesis through a process called photophosphorylation, where light energy is used to add a phosphate group to ADP, forming ATP.", status: "0", id: 316129 },

{ q: "What are antenna pigments in photosynthesis?", a: "Antenna pigments are molecules in the thylakoid membrane that absorb light and transfer the energy to the reaction center of photosystem I or II, where it is used to drive the photosynthetic process.", status: "1", id: 642587 },

{ q: "How does photosynthesis affect the global oxygen cycle?", a: "Photosynthesis produces oxygen as a byproduct, which is released into the atmosphere. This process is a critical component of the global oxygen cycle, supporting the respiration of living organisms.", status: "2", id: 201158 },

{ q: "What are photosystems and how do they function in photosynthesis?", a: "Photosystems are protein complexes in the thylakoid membranes that absorb light and convert it into chemical energy. Photosystem II splits water molecules, while Photosystem I uses the energy to produce NADPH.", status: "0", id: 808708 },

{ q: "How does chlorophyll absorb light in photosynthesis?", a: "Chlorophyll absorbs light in the blue and red wavelengths, while reflecting green light. This absorbed energy excites electrons, which are then used to drive the light-dependent reactions.", status: "1", id: 674156 },

{ q: "What is cyclic photophosphorylation?", a: "Cyclic photophosphorylation is a process in which electrons are cycled back to the photosystem I reaction center, generating ATP without the production of NADPH or oxygen.", status: "2", id: 147069 },

{ q: "What role do guard cells play in photosynthesis?", a: "Guard cells regulate the opening and closing of stomata, allowing for gas exchange (carbon dioxide in, oxygen out) and controlling water loss during photosynthesis.", status: "0", id: 167552 },

{ q: "What happens during the carbon fixation stage of the Calvin Cycle?", a: "During carbon fixation, the enzyme RuBisCO incorporates carbon dioxide into an organic molecule (ribulose bisphosphate), initiating the process of converting CO2 into glucose.", status: "1", id: 531446 },

{ q: "What is the importance of sunlight in photosynthesis?", a: "Sunlight provides the energy needed to drive the light-dependent reactions in photosynthesis, which ultimately results in the production of ATP and NADPH necessary for the Calvin Cycle.", status: "2", id: 693129 },

{ q: "What is the role of plastocyanin in photosynthesis?", a: "Plastocyanin is a copper-containing protein that transfers electrons from cytochrome b6f to Photosystem I during the light-dependent reactions of photosynthesis.", status: "0", id: 701130 },

{ q: "How do cyanobacteria perform photosynthesis?", a: "Cyanobacteria perform photosynthesis using chlorophyll pigments located in their thylakoid membranes, much like plants, converting light energy into chemical energy and producing oxygen.", status: "1", id: 320463 },

{ q: "What is the function of the stroma in the chloroplast?", a: "The stroma is the fluid-filled space inside the chloroplast where the Calvin Cycle takes place, using ATP and NADPH produced in the light-dependent reactions to synthesize glucose.", status: "2", id: 941795 },

{ q: "What is the Hill reaction in photosynthesis?", a: "The Hill reaction is the photochemical reduction of an electron acceptor by water in the presence of chloroplasts and light, which results in the production of oxygen.", status: "0", id: 517099 },

{ q: "How do algae contribute to the process of photosynthesis in aquatic ecosystems?", a: "Algae perform photosynthesis, producing oxygen and serving as a primary source of organic carbon, which supports the aquatic food chain and contributes to global oxygen levels.", status: "1", id: 694095 },

{ q: "How does light wavelength affect photosynthesis?", a: "Different wavelengths of light are absorbed by different pigments. Blue and red wavelengths are most effective for photosynthesis, while green is mostly reflected, which is why plants appear green.", status: "2", id: 763432 },

{ q: "What is the role of ferredoxin in photosynthesis?", a: "Ferredoxin is a protein that transfers electrons from Photosystem I to the enzyme NADP+ reductase, which is essential for the production of NADPH in the light-dependent reactions.", status: "0", id: 120535 },

{ q: "How do plants avoid photorespiration?", a: "Plants avoid photorespiration by using mechanisms like C4 and CAM pathways, which concentrate carbon dioxide near RuBisCO, minimizing oxygen interference in the Calvin Cycle.", status: "1", id: 432698 },

{ q: "What is non-cyclic photophosphorylation?", a: "Non-cyclic photophosphorylation is the process in photosynthesis where electrons move from water through Photosystem II and Photosystem I to produce ATP, NADPH, and oxygen.", status: "2", id: 560822 },

{ q: "Why is water splitting important in photosynthesis?", a: "Water splitting in Photosystem II provides electrons to replace those lost by chlorophyll and produces oxygen as a byproduct, which is essential for aerobic life on Earth.", status: "0", id: 293775 },

{ q: "What is the significance of chlorophyll b in photosynthesis?", a: "Chlorophyll b assists in photosynthesis by capturing light energy in a slightly different spectrum than chlorophyll a, broadening the range of light that plants can use for energy.", status: "1", id: 148450 },

{ q: "How do light-harvesting complexes function in photosynthesis?", a: "Light-harvesting complexes capture and transfer light energy to the reaction center of a photosystem, enabling the light-dependent reactions of photosynthesis.", status: "2", id: 27638 },

{ q: "How do plants utilize stored starch from photosynthesis?", a: "Plants break down stored starch into glucose during periods of low light or high energy demand, using the glucose for cellular respiration to produce ATP.", status: "0", id: 245100 },

{ q: "What is the proton gradient in photosynthesis, and why is it important?", a: "The proton gradient across the thylakoid membrane drives the synthesis of ATP in the chloroplast during photosynthesis through chemiosmosis.", status: "1", id: 713777 },

{ q: "How do epiphytes photosynthesize without soil?", a: "Epiphytes, such as orchids, photosynthesize by absorbing moisture and nutrients from the air, using specialized structures to capture water and light without relying on soil.", status: "2", id: 418435 },

{ q: "How do phototropins influence photosynthesis?", a: "Phototropins are light receptors that help plants orient their leaves toward light sources, maximizing light absorption and improving photosynthetic efficiency.", status: "0", id: 810957 },

{ q: "How does chlorophyll fluorescence indicate photosynthetic activity?", a: "Chlorophyll fluorescence occurs when chlorophyll molecules release light energy after absorbing photons. Measuring this fluorescence helps indicate the efficiency of photosynthesis.", status: "1", id: 655909 },

{ q: "What is the role of cytochrome b6f in photosynthesis?", a: "Cytochrome b6f is a protein complex that transfers electrons between Photosystem II and Photosystem I, helping to generate a proton gradient that drives ATP synthesis.", status: "2", id: 488670 },

{ q: "How do shade-tolerant plants adapt their photosynthesis?", a: "Shade-tolerant plants adapt by developing more chlorophyll to capture lower light levels and altering their leaf structure to maximize light absorption in dim environments.", status: "0", id: 961487 },

{ q: "What is the function of carotenoids in photosynthesis?", a: "Carotenoids are pigments that absorb light in the blue and green regions of the spectrum, transferring this energy to chlorophyll for use in the light-dependent reactions.", status: "1", id: 6912 },

{ q: "What is the photolysis of water in photosynthesis?", a: "Photolysis is the process of splitting water molecules using light energy in Photosystem II, producing oxygen, electrons, and protons essential for ATP and NADPH production.", status: "2", id: 629970 },

{ q: "How do dune plants adapt their photosynthesis?", a: "dune plants, often CAM plants, open their stomata at night to minimize water loss while storing CO2 for use in photosynthesis during the day, reducing evaporation.", status: "0", id: 609224 },

{ q: "What is the Emerson enhancement effect?", a: "The Emerson enhancement effect describes the increase in the rate of photosynthesis when plants are exposed to both red and far-red light, demonstrating the cooperation of two photosystems.", status: "1", id: 154532 },

{ q: "What are xanthophylls and their role in photosynthesis?", a: "Xanthophylls are carotenoid pigments that protect plants from excess light by dissipating excess energy as heat, preventing damage to the photosynthetic apparatus.", status: "2", id: 250432 },

{ q: "How does the concentration of carbon dioxide affect photosynthesis?", a: "An increase in carbon dioxide concentration generally increases the rate of photosynthesis, up to a point where other factors like light or temperature become limiting.", status: "0", id: 991274 },

{ q: "What is the difference between Photosystem I and Photosystem II?", a: "Photosystem II absorbs light to split water and generate oxygen, while Photosystem I uses light energy to produce NADPH. Both systems work together to drive photosynthesis.", status: "1", id: 716256 },

{ q: "What is the Z-scheme in photosynthesis?", a: "The Z-scheme is a model that describes the electron flow in the light-dependent reactions of photosynthesis, moving from water to Photosystem II, through the electron transport chain, to Photosystem I.", status: "2", id: 619545 },

{ q: "How does CAM photosynthesis help plants in dry environments?", a: "CAM photosynthesis allows plants to fix carbon dioxide at night, reducing water loss by keeping stomata closed during the day while still producing sugars from the stored CO2.", status: "0", id: 668475 },

{ q: "What is the role of ATP synthase in photosynthesis?", a: "ATP synthase is an enzyme in the thylakoid membrane that uses the proton gradient created by the electron transport chain to synthesize ATP from ADP and inorganic phosphate.", status: "1", id: 236778 },

{ q: "How does chlorophyll protect plants from excess light?", a: "Chlorophyll can dissipate excess absorbed light energy as heat, reducing the risk of damage to the photosynthetic apparatus under high light conditions.", status: "2", id: 326144 },

{ q: "How do pigments like phycoerythrin aid in photosynthesis?", a: "Phycoerythrin is a pigment found in some algae that absorbs light in the blue-green spectrum, allowing photosynthesis to occur in deeper water where light is less available.", status: "0", id: 698586 },

{ q: "What is the role of the Calvin Cycle in carbon fixation?", a: "The Calvin Cycle is responsible for fixing carbon dioxide into an organic molecule, producing glucose and other carbohydrates needed for plant growth and energy.", status: "1", id: 744141 },

{ q: "How do aquatic plants perform photosynthesis?", a: "Aquatic plants perform photosynthesis using dissolved carbon dioxide and light that penetrates the water. Their leaves often have a thin cuticle to facilitate gas exchange.", status: "2", id: 830040 },

{ q: "What is the photoelectric effect in photosynthesis?", a: "The photoelectric effect refers to the emission of electrons from a material when it absorbs light energy. In photosynthesis, this occurs when chlorophyll absorbs photons.", status: "0", id: 562984 },

{ q: "How do mangroves perform photosynthesis in salty environments?", a: "Mangroves adapt to salty environments by filtering salt out of seawater at their roots and performing photosynthesis in their leaves, which are often waxy to reduce water loss.", status: "1", id: 528564 },

{ q: "What is the effect of light polarization on photosynthesis?", a: "Polarized light can affect the orientation of light-harvesting complexes in photosystems, potentially altering the efficiency of light absorption and the rate of photosynthesis.", status: "2", id: 296753 },

{ q: "What is the role of proton pumps in photosynthesis?", a: "Proton pumps in the thylakoid membrane create a proton gradient by moving protons from the stroma into the thylakoid lumen, which is used to generate ATP during the light-dependent reactions.", status: "0", id: 442865 },

{ q: "How do halophytes photosynthesize in saline conditions?", a: "Halophytes, or salt-tolerant plants, have specialized adaptations like salt excretion glands and efficient photosynthesis mechanisms to thrive in saline environments.", status: "1", id: 51748 },

{ q: "How does the mesophyll contribute to photosynthesis?", a: "Mesophyll cells contain a high concentration of chloroplasts and are the primary site of photosynthesis in leaves, facilitating the absorption of carbon dioxide and light.", status: "2", id: 891662 },

{ q: "What is the compensation point in photosynthesis?", a: "The compensation point is the light intensity at which the rate of photosynthesis matches the rate of cellular respiration, meaning the plant produces just enough energy to meet its needs.", status: "0", id: 805473 },

{ q: "How do lichens photosynthesize?", a: "Lichens, which are symbiotic associations between fungi and photosynthetic algae or cyanobacteria, perform photosynthesis through their algal or cyanobacterial components, producing energy for the partnership.", status: "1", id: 590369 },

{ q: "What is the relationship between chloroplasts and mitochondria in plant cells?", a: "Chloroplasts capture light energy to produce glucose through photosynthesis, while mitochondria break down glucose to produce ATP through cellular respiration, working together to provide energy for the plant.", status: "2", id: 886344 },

{ q: "What is photoinhibition in photosynthesis?", a: "Photoinhibition occurs when plants are exposed to excessive light, leading to damage to the photosynthetic apparatus, particularly Photosystem II, and reducing the efficiency of photosynthesis.", status: "0", id: 203316 },

{ q: "What is the role of chloroplast DNA in photosynthesis?", a: "Chloroplast DNA contains the genes that code for proteins essential to the photosynthetic process, including those involved in the light-dependent reactions and the Calvin Cycle.", status: "1", id: 447338 },

{ q: "What is the effect of ultraviolet light on photosynthesis?", a: "Excessive ultraviolet light can damage DNA and proteins involved in photosynthesis, leading to reduced efficiency and potential harm to the plant's cellular structures.", status: "2", id: 660963 },
        ];

        this.cards.forEach((c) => {
            c.folder = [232, 457, 109, 832, 918, 717][Math.floor(Math.random() * 6)];
        })

        this.folders = [
            {
                name: "Biology",
                id: 232,
                theme: "eventide",
                parent: null,
                created_at: "2024-09-04 21:36:11",
                updated_at: "2024-09-04 21:36:11"
            },
            {
                name: "Chemistry",
                id: 457,
                theme: "shroud",
                parent: null,
                created_at: "2024-09-04 21:36:11",
                updated_at: "2024-09-04 21:36:11"
            },
            {
                name: "Cell Biology",
                id: 109,
                theme: "spring",
                parent: 232,
                created_at: "2024-09-04 21:36:11",
                updated_at: "2024-09-04 21:36:11"
            }
        ];

        localStorage.setItem("folders", JSON.stringify([]));
    },

    data() {
        return {
            cards: [],
            
            folder: "232",

            folders: []
        }
    }
}

</script>