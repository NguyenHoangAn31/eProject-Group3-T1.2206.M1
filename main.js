//header
var header = `
<div class="header position-fixed w-100 " style="z-index:3;transition: top 0.3s;top:0" id="navbarss">
<nav class="navbar navbar-expand-lg bg-white">
    <div class="container">
        <a class="navbar-brand" href=""><img src="IMGS/main/logo_new.gif" width="150" height="40"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav w-100 justify-content-evenly" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                <li class="nav-item">
                    <a class="d-block p-2" href="index.html"><i class="fa-solid fa-house"></i> Home</a>
                </li>
                <li class="nav-item hover">
                    <a class="d-block p-2" href="">Problems We Treat</a>
                    <ul class="hidden">
                        <li><a class="d-block p-2" href="relievestress.html">Relieve Stress</a></li>
                        <li><a class="d-block p-2" href="enhancerelaxation.html">Enhance Relaxation</a></li>
                        <li><a class="d-block p-2" href="improvecirculation.html">Improve Circulation</a></li>
                        <li><a class="d-block p-2" href="injuryrecovery.html">Injury Recovery</a></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a class="d-block p-2" href="about.html">About Us</a>
                </li>
                <li class="nav-item">
                    <a class="d-block p-2" href="contact.html">Contact</a>
                </li>
                <li class="nav-item">
                    <a class="d-block p-2" href="shoppingcart.html"><i class="fa-solid fa-cart-shopping position-relative"><span id="totalcount" class="badge bg-danger position-absolute" style="left:10px;top:-10px"></span></i></a>
                </li>
                <li class="nav-item">
                    <a class="d-block p-2" href="login.html">Login <i class="fa-solid fa-circle-user position-relative"><span id="accountmember" class="badge bg-info position-absolute" style="left:10px;top:-10px"></span></i></a>
                </li>
                <li class="nav-item">
                    <a href="index.html" class="d-block p-2" onclick="signout()">Sign Out <i class="fa-solid fa-right-from-bracket"></i></a>
                </li>
            </ul>
        </div>
    </div>
</nav>
</div>`


//footer
var footer = `<div class="footer">
<div class="row container m-auto py-5 mt-5">
    <div class="col-lg-3">
        <img src="IMGS/main/logo.jpg" alt="" width="200" height="100">
        <h4>Chiropractic Clinic</h4>
        <p>Provide the best healthcare service for the spine and effectively address musculoskeletal problems
            without drugs or surgery.</p>
    </div>
    <div class="col-lg-3">
        <h3>Useful Links <i class="fa-solid fa-link"></i></h3>
        <a href="">How It Works</a>
        <a href="">Reviews</a>
        <a href="">Term & Conditions</a>
        <a href="">Privacy Policy</a>
        <a href=""><i class="fa-solid fa-sitemap"></i> Site Map</a>
    </div>
    <div class="col-lg-3">
        <h3> Contact Us <i class="fa-solid fa-envelope"></i></h3>
        <a href=""><i class="fa-solid fa-question"></i> Help Center</a>
        <a href=""><i class="fa-brands fa-facebook"></i> Facebook</a>
        <a href=""><i class="fa-brands fa-instagram"></i> Instagram</a>
        <a href=""><i class="fa-solid fa-question"></i> About Us</a>
    </div>
    <div class="col-lg-3">
        <h3>Location <i class="fa-solid fa-location-dot"></i></h3>
        <h4>ZaraTherapyClinic - HCM</h4>
        <h4>590 Cach Mang Thang 8</h4>
        <p><i class="fa-solid fa-phone"></i> Tel : +0347809470</p>
        <p><i class="fa-solid fa-user"></i> Ascess : 281,027</p>
        <p><i class="fa-solid fa-globe"></i> Online : 273</p>
    </div>
</div>
<div class="container-fluid text-center">© Copyright 2022 - ZaraTherapyClinic</div>
</div>`

$("#header").html(header);
$("#footer").html(footer);


AOS.init();

//arr product
var mang = [
    { "id": 0, "pricenew": 32.00, "priceold": 35.45, "imgsrc": "IMGS/problems/relievestress/medicine/medicine1.jpg", "imgsrc1": "IMGS/problems/relievestress/medicine/medicine11.jpg", "imgsrc2": "IMGS/problems/relievestress/medicine/medicine12.jpg", "imgsrc3": "IMGS/problems/relievestress/medicine/medicine13.jpg", "name": "OLLY Ultra Strength", "content": "<ul><li>OLLY ULTRA STRENGTH GOODBYE STRESS ULTRA SOFTGEL: Goodbye Stress Ultra Softgels are blended with powerful botanicals and nutrients to help you stay calm and centered</li> <br> <li>THE GOODS INSIDE: OLLY Goodbye Stress softgels are expertly blended with GABA, a fast working (within 30-60 minutes) active that supports a relaxed state of mind. L-Theanine is GABA's partner in sublime—it goes right to work in your brain to help you keep your cool, and Lemon Balm is a soothing botanical that has been used for centuries to help quiet the mind. Plus Ashwagandha for mood and energy support</li><br><li>HOW TO TAKE: Take 2 softgels per day with water as needed. Swallow whole, do not chew. Comes with 60 capsules per bottle for a 30 day supply</li></ul> ", "review": 200 },
    { "id": 1, "pricenew": 29.55, "priceold": 31.50, "imgsrc": "IMGS/problems/relievestress/medicine/medicine2.jpg", "imgsrc1": "IMGS/problems/relievestress/medicine/medicine21.jpg", "imgsrc2": "IMGS/problems/relievestress/medicine/medicine22.jpg", "imgsrc3": "IMGS/problems/relievestress/medicine/medicine23.jpg", "name": "LifeSeasons - Anxie-T", "content": "<ul><li></li>Feel More Calm And Relaxed: Anxie-T, our supplement for stress, nourishes the nervous system and supports the body's natural ability to deal with stress, nervousness, stress-related sleep problems and more, providing a sense of well-being.<br><li>Same-Day Natural Results: Anxie-T stress supplements can provide same-day results, including a feeling of calm without feeling tired. Through the use of Ashwagandha, GABA, Kava Kava, Theobromine, and L-Theanine, Anxie-T provides a feeling of relaxation that continues throughout the day, helping with normal activities and sleep.</li><br><li>Live Healthier And Happier: Take two Anxie-T stress support supplement capsules each morning, with or without food. Another capsule may be added in the evening for additional support. Talk to your healthcare provider about the serving size that is right for your body.</li></ul>", "review": 178 },
    { "id": 2, "pricenew": 23.5, "priceold": 25.5, "imgsrc": "IMGS/problems/relievestress/medicine/medicine3.jpg", "imgsrc1": "IMGS/problems/relievestress/medicine/medicine31.jpg", "imgsrc2": "IMGS/problems/relievestress/medicine/medicine32.jpg", "imgsrc3": "IMGS/problems/relievestress/medicine/medicine33.jpg", "name": "Genexa Stress - 60 Tablets", "content": "<ul><li></li>Stress relief & relaxation formula: Organic blend of homeopathic ingredients formulated to address symptoms associated with stress such as fatigue, irritability, and hypersensitivity.<br><li>Physician-formulated: Genexa Stress tablets' safe, organic formula was created by our Chief Formulating Officer, a medical doctor and homeopathic physician.</li><br><li>Easy to use: Vanilla & lavender flavored chewable tablets taste great and are easy to take on-the-go. Made in USA with globally sourced organic ingredients.</li></ul>", "review": 347 },
    { "id": 3, "pricenew": 17.5, "priceold": 20.25, "imgsrc": "IMGS/problems/relievestress/medicine/medicine4.jpg", "imgsrc1": "IMGS/problems/relievestress/medicine/medicine41.jpg", "imgsrc2": "IMGS/problems/relievestress/medicine/medicine42.jpg", "imgsrc3": "IMGS/problems/relievestress/medicine/medicine43.jpg", "name": "Naturals Calm Tablets", "content": "<ul><li>RELIEF OF RESTLESSNESS, anxiousness, nervousness, irritability, occasional forgetfulness, and the inability to concentrate.</li><br><li>EASY TO TAKE: Easy to swallow tablets to ease tension and promote sleep naturally.</li><li>50 TABLETS = UP TO 50 DOSES of Hyland's Calm Tablets; Made with natural active ingredients, our products contain no artificial flavors or sugars, dyes or parabens.</li><li>KEEPING FAMILIES HEALTHY: Hyland’s Naturals is a leading consumer health brand with more than a century of history making high quality products to help people live healthier and happier lives.</li><br><li>With a state-of-the-art, FDA regulated and cGMP compliant facility, our top-selling products are sold in more than 15 countries and can be found in every major retailer in the United States.</li></ul>", "review": 79 },
    { "id": 4, "pricenew": 27.5, "priceold": 29.25, "imgsrc": "IMGS/problems/relievestress/medicine/medicine5.jpg", "imgsrc1": "IMGS/problems/relievestress/medicine/medicine51.jpg", "imgsrc2": "IMGS/problems/relievestress/medicine/medicine52.jpg", "imgsrc3": "IMGS/problems/relievestress/medicine/medicine53.jpg", "name": "Estroven mood booster", "content": "<ul><li>HELPS MANAGE MOOD, MEMORY, AND STRESS. Menopause can come with all sorts of symptoms – daily menopausal stress and irritability – not to mention the hot flashes and night sweats Estrogen Stress Plus Mood & Memory can help</li><li>SAFE MULTI-SYMPTOM RELIEF: hot flashes, night sweats, daily stress, manage mood, manage memory</li><li>SAFE AND EFFECTIVE dietary supplement that is both drug free and estrogen free</li><li>CONTAINS NATURALLY-SOURCED BLACK COHOSH, plus clinically proven Soy Is flavones, to help reduce the frequency and severity of hot flashes and night sweats</li></ul>", "review": 183 },
    { "id": 5, "pricenew": 15.75, "priceold": 17.85, "imgsrc": "IMGS/problems/enhancerelaxation/medicine/medicine1.jpg", "imgsrc1": "IMGS/problems/enhancerelaxation/medicine/medicine11.jpg", "imgsrc2": "IMGS/problems/enhancerelaxation/medicine/medicine12.jpg", "imgsrc3": "IMGS/problems/enhancerelaxation/medicine/medicine13.jpg", "name": "Nature Made Wellblends ", "content": "<ul><li>SAME DAY STRESS SUPPORT: Nature Made Wellblends Stress Relief Gummies are a scientifically designed 2-in-1 blend with ingredients to provide same day stress support</li><br><li>NATURE MADE WELLBLENDS: This supplement that supports staying well blends L Theanine and GABA to help reduce stress</li><li>DE-STRESS BLEND OF L-THEANINE & GABA: Help reduce stress with L theanine, and help support a calm and relaxed mental state with GABA</li><br><li>WORKS WITHIN 1 HOUR: This gluten-free stress relief supplement is 100% drug-free and non habit forming; Adults, chew 2 gummies as needed; Works within 30 to 60 minutes</li></ul>", "review": 249 },
    { "id": 6, "pricenew": 10.95, "priceold": 12.50, "imgsrc": "IMGS/problems/enhancerelaxation/medicine/medicine2.jpg", "imgsrc1": "IMGS/problems/enhancerelaxation/medicine/medicine21.jpg", "imgsrc2": "IMGS/problems/enhancerelaxation/medicine/medicine22.jpg", "imgsrc3": "IMGS/problems/enhancerelaxation/medicine/medicine23.jpg", "name": "Relaxation Enhance Gum", "content": "<ul><li>Fast Acting: These fast acting gummies are ideal for daytime stress relief and help soothe tension and promote feelings of calmness. Non-GMO, gluten-free, gelatin-free and vegetarian</li><br><li>Product Note: Exposure to heat or sunlight may lead to melting/damage of product. Hence customers are expected to be available during the product delivery</li><br><li>Drug-Free Stress Relief: Blended with 5 HTP, L-Theanine and Lemon balm for relaxation, a natural serotonin boost and calmness without drowsiness. Comes in a delicious fruit punch flavor</li></ul>", "review": 357 },
    { "id": 7, "pricenew": 4.35, "priceold": 5.75, "imgsrc": "IMGS/problems/enhancerelaxation/medicine/medicine3.jpg", "imgsrc1": "IMGS/problems/enhancerelaxation/medicine/medicine31.jpg", "imgsrc2": "IMGS/problems/enhancerelaxation/medicine/medicine32.jpg", "imgsrc3": "IMGS/problems/enhancerelaxation/medicine/medicine33.jpg", "name": "Bach RESCUE PASTILLES", "content": "<ul><li>BACH RESCUE PASTILLES: Sugar-free natural orange and elderflower flavored lozenges to help relieve feelings of stress</li><br><li>NATURALLY RELIEVE STRESS: Easy to use when on-the-go to help you stay calm and relaxed when everyday moments become overwhelming</li><br><li>TRUSTED WORLDWIDE: Made with the original RESCUE REMEDY tincture - Dr. Bach's blend of 5 natural flower essences, hand-picked from his original gardens in the UK</li><br><li></li>TRUSTED FLOWER ESSENCE BLEND: Plant-based active ingredients, homeopathic, vegetarian. FREE OF: Artificial flavors/colors, gluten, sugar, major allergens. Non-alcohol, non-habit forming</ul>", "review": 173 },
    { "id": 8, "pricenew": 29.25, "priceold": 32.75, "imgsrc": "IMGS/problems/enhancerelaxation/medicine/medicine4.jpg", "imgsrc1": "IMGS/problems/enhancerelaxation/medicine/medicine41.jpg", "imgsrc2": "IMGS/problems/enhancerelaxation/medicine/medicine42.jpg", "imgsrc3": "IMGS/problems/enhancerelaxation/medicine/medicine43.jpg", "name": "Concentration Capsules", "content": "<ul><li>Alpha Brain Daily Mind Support: Boost your brain with Onnit Alpha Brain Booster. These mind supplements for focus can help enhance memory and cognitive speed.</li><br><li>Enhance Your Focus: Whether you’re focusing on your career, academics, social life, or athletics, Alpha Brain helps support memory, mental speed and focus</li><br><li>Carefully Selected Ingredients: These brain vitamins are formulated with high-quality nutrients. They include Cat’s Claw Extract, Bacopa, Oat Straw, Huperzia Serrata, and our Focus and Flow Blends.</li><br><li>Quality Formulas: Alpha Brain is stimulant-free to avoid afternoon lull. It is free of caffeine, dairy, nuts, or gluten.</li><br><li>Leading Nootropics Since 2011: Alpha Brain supplements have been a market leader in the nootropics space since 2011.</li></ul>", "review": 346 },
    { "id": 9, "pricenew": 27.95, "priceold": 29.85, "imgsrc": "IMGS/problems/enhancerelaxation/medicine/medicine5.jpg", "imgsrc1": "IMGS/problems/enhancerelaxation/medicine/medicine51.jpg", "imgsrc2": "IMGS/problems/enhancerelaxation/medicine/medicine52.jpg", "imgsrc3": "IMGS/problems/enhancerelaxation/medicine/medicine53.jpg", "name": "Probiotic Supplement", "content": "<ul><li>DOCTOR FORMULATED PROBIOTICS FOR EMOTIONAL WELL-BEING AND RELAXATION: Mood Probiotic provides 50 Billion CFU and 16 Probiotic Strains including Clinically Studied probiotics, plus 350 mg of Organic Ashwagandha and Alaskan Blueberry for stress management</li><br><li>DIGESTION SUPPORT BACKED BY SCIENCE: Emerging science shows a link between gut and brain health; this supplement for mood includes L. helveticus ROO52 and B. longum RO175—Clinically shown to support mood and relaxation—plus Lactobacillus acidophilus</li><br><li>STRESS MANAGEMENT AND PREBIOTICS FOR WOMEN AND MEN: Our prebiotic supplement with Organic Acacia and Potato prebiotic fiber to help feed good bacteria in the gut, plus a blend of Ashwagandha and Blueberries for stress management—in just 2 capsules a day</li><br><li>PROBIOTIC POTENCY GUARANTEED THROUGH EXPIRATION: We begin with high levels of probiotics to ensure viability, even if the product is warm for a few days during shipment—especially during summer or in warmer climates; Shelf stable, no need to refrigerate!</li></ul>", "review": 258 },
    { "id": 10, "pricenew": 20.5, "priceold": 22.00, "imgsrc": "IMGS/problems/impovecirculation/medicine/medicine1.jpg", "imgsrc1": "IMGS/problems/impovecirculation/medicine/medicine11.jpg", "imgsrc2": "IMGS/problems/impovecirculation/medicine/medicine12.jpg", "imgsrc3": "IMGS/problems/impovecirculation/medicine/medicine13.jpg", "name": "Vitamins B9 & B12", "content": "<ul><li>Vegan, Non-GMO, Gluten-free & Gelatin-free: Each bottle of Goli contains 60 delicious, vegan, non-gmo, gluten-free & gelatin-free Apple Cider Vinegar gummies, which makes them suitable for almost any lifestyle.</li><br><li>Made in the USA with locally and globally sourced ingredients. Goli Gummies are made in allergen-free, cGMP certified facilities in the United States with local and globally sourced ingredients to ensure that our products are reputable and of the highest quality standards.</li><br><li>Patented Formula, Essential Vitamins, Great Taste: Our patented formula contains essential Vitamins B9 and B12 to help support cellular energy production, immune function, heart health, healthy nutrient metabolism, a healthy nervous system and overall health and wellbeing. Apple Cider Vinegar has traditionally been used for digestion, gut health and appetite. Our unique flavor profile combined with essential vitamins makes Goli ACV Gummies a delicious addition to your daily health routine.</li></ul>", "review": 112 },
    { "id": 11, "pricenew": 29.5, "priceold": 31, "imgsrc": "IMGS/problems/impovecirculation/medicine/medicine2.jpg", "imgsrc1": "IMGS/problems/impovecirculation/medicine/medicine21.jpg", "imgsrc2": "IMGS/problems/impovecirculation/medicine/medicine22.jpg", "imgsrc3": "IMGS/problems/impovecirculation/medicine/medicine23.jpg", "name": "Qunol Ultra CoQ10 100mg", "content": "<ul><li>3X BETTER ABSORPTION THAN REGULAR [2] CoQ10. Clinical trials have proven that no other CoQ10 supplement absorbs better than Qunol. In fact, Qunol Ultra absorbs 3X better than regular [2] CoQ10</li><br><li>Product Note: Exposure to heat or sunlight may lead to melting/damage of product. Hence customers are expected to be available during the product delivery</li><br><li>With superior absorption compared to regular [2] CoQ10, Qunol 100mg CoQ10 softgel capsules can help you reach optimal levels of Coenzyme Q10 sooner, so you can experience the potential benefits faster</li><br><li>100% WATER AND FAT-SOLUBLE, Qunol CoQ10's patented formulation is 100% water and fat-soluble, unlike regular [2] CoQ10 that does not dissolve in water and dissolves very poorly in fat</li></ul>", "review": 76 },
    { "id": 12, "pricenew": 23, "priceold": 24.5, "imgsrc": "IMGS/problems/impovecirculation/medicine/medicine3.jpg", "imgsrc1": "IMGS/problems/impovecirculation/medicine/medicine31.jpg", "imgsrc2": "IMGS/problems/impovecirculation/medicine/medicine32.jpg", "imgsrc3": "IMGS/problems/impovecirculation/medicine/medicine33.jpg", "name": "PreserVision AREDS 2", "content": "<ul><li>PRESERVISION AREDS 2 EYE VITAMINS: This formula uses Lutein & Zeaxanthin, zinc, copper, Vitamin C & Vitamin E to exactly match the nutrient formula recommended by the AMD experts at the National Eye Institute based on the Age Related Eye Disease Study 2.</li><br><li>Product Note: Exposure to heat or sunlight may lead to melting/damage of product. Hence customers are expected to be available during the product delivery</li><br><li>AREDS 2 SUPPLEMENT: PreserVision is the #1 doctor recommended eye vitamin based on 20 years of clinical studies to help reduce the risk of progression of moderate to advanced Age-related Macular Degeneration, & uses Lutein & Zeaxanthin.</li><br><li>EYE VITAMINS FOR HEALTHY EYES: Bausch + Lomb carries a full line of ocular supplements with vitamins, minerals & nutrients that promote eye health, including Ocuvite eye vitamins for general eye health & PreserVision for age-related eye health concerns.</li></ul>", "review": 87 },
    { "id": 13, "pricenew": 27, "priceold": 29.5, "imgsrc": "IMGS/problems/impovecirculation/medicine/medicine4.jpg", "imgsrc1": "IMGS/problems/impovecirculation/medicine/medicine41.jpg", "imgsrc2": "IMGS/problems/impovecirculation/medicine/medicine42.jpg", "imgsrc3": "IMGS/problems/impovecirculation/medicine/medicine43.jpg", "name": "HumanN SuperBeets", "content": "<ul><li>Support Healthy Blood Pressure & Energy – Powered by clinically researched French Grape Seed Extract, the unique antioxidant compound in SuperBeets Heart Chews delivers nearly 2x MORE effective blood pressure support than a healthy lifestyle alone.*</li><br><li>Plant-Based, Clinically Studied Heart Health Support – The clinically studied polyphenols in plant-based, non-GMO, caffeine-free SuperBeets Heart Chews support your body’s production of Nitric Oxide. This is important because it helps you do more to support heart-healthy circulation & blood pressure by helping protect your Nitric Oxide levels. The unique Grape Seed Extract in each chew also helps prevent the destruction of Nitric Oxide by free radicals, giving you even more heart health support.</li><br><li>French Grape Seed Extract & Non-GMO Beet Root Powder – Each serving delivers 150mg clinically researched Grape Seed Extract from the famous Loire Valley in France, and 500mg of USA-grown, premium beet root powder.</li></ul>", "review": 98 },
    { "id": 14, "pricenew": 34.5, "priceold": 34, "imgsrc": "IMGS/problems/impovecirculation/medicine/medicine5.jpg", "imgsrc1": "IMGS/problems/impovecirculation/medicine/medicine51.jpg", "imgsrc2": "IMGS/problems/impovecirculation/medicine/medicine52.jpg", "imgsrc3": "IMGS/problems/impovecirculation/medicine/medicine53.jpg", "name": "HumanN Neo40 Daily", "content": "<ul><li>Increase Your Body's Nitric Oxide Levels: Why Neo40? Our nitric oxide levels decrease by the time we reach 40, which can impact our energy levels, heart health, and performance. Inspired by Nobel Prize winning science, our nitric oxide boosting tablets support healthy blood pressure levels and cardiovascular health to help you continue living life to the fullest.</li><br><li>The Science Speaks for Itself: Our Neo40 daily blood pressure support supplement entails a formula based on exclusive patents from the University of Texas Health Science Center. Our heart-health supporting tablets are also shown to be effective in multiple clinical trials. Our supplement does not rely on L-Arginine & is the only product that generates nitric oxide AND supports the body's ability to produce it over time.</li><br><li>Ingredients You Can't Beet: Each tablet contains 420mg of our powerful nitric oxide blend: beet root powder, hawthorn berry extract, L-citrulline, & sodium nitrate. Used by medical professionals across the country, we recommend taking 2 tablets per day, 12 hours apart for the first 30 to 45 days. Afterward, go down to just one tablet to support healthy blood flow.</li></ul>", "review": 154 },
    { "id": 15, "pricenew": 20, "priceold": 22, "imgsrc": "IMGS/problems/injuryrecovery/medicine/medicine1.jpg", "imgsrc1": "IMGS/problems/injuryrecovery/medicine/medicine11.jpg", "imgsrc2": "IMGS/problems/injuryrecovery/medicine/medicine12.jpg", "imgsrc3": "IMGS/problems/injuryrecovery/medicine/medicine13.jpg", "name": "Boiron Arnicare Gel ", "content": "<ul><li>ARNICA FOR PAIN: This homeopathic medicine helps temporarily relieve muscle pain & stiffness due to minor injuries, overexertion & falls. Also great for pain, swelling, & discoloration from bruises.</li><br><li>TOPICAL PAIN RELIEF: Our non-greasy, water-based formula absorbs quickly & is unscented & paraben-free. This cooling gel is great for relief following an injury, intense workout, or general overexertion.</li><li>PLANT-BASED ACTIVE INGREDIENT: The Arnica montana plant is a natural pain reliever. This popular homeopathic medicine temporarily relieves muscle pain & stiffness without unwanted drowsiness.Fluoride-Free</li><li>HOMEOPATHIC MEDICINE uses highly diluted biological, botanical, or mineral substances to relieve symptoms. Our tablets, pellets, & topical treatments work with your body without the risk of contraindications, or known drug interactions.</li></ul>", "review": 193 },
    { "id": 16, "pricenew": 21.5, "priceold": 24, "imgsrc": "IMGS/problems/injuryrecovery/medicine/medicine2.jpg", "imgsrc1": "IMGS/problems/injuryrecovery/medicine/medicine21.jpg", "imgsrc2": "IMGS/problems/injuryrecovery/medicine/medicine22.jpg", "imgsrc3": "IMGS/problems/injuryrecovery/medicine/medicine23.jpg", "name": "Voltaren Arthritis Pain", "content": "<ul><li>Two 3.5 oz/100 g tubes of Voltaren Arthritis Pain Gel for Powerful Topical Arthritis Pain Relief</li><br><li>Number 1 Doctor Recommended topical pain relief brand</li><br><li>Clinically Proven to relieve arthritis pain, improve mobility and reduce stiffness, aches and pains to provide prescription strength arthritis pain relief</li><br><li>An Alternative to Pills, Voltaren is a nonsteroidal anti-inflammatory gel that combines the benefits of an arthritis cream and gel for arthritis pain management</li><br><li>Diclofenac Sodium Topical Gel Penetrates Deep to attack arthritis pain directly at the source of inflammation, treating arthritis pain rather than just masking it</li></ul>", "review": 34 },
    { "id": 17, "pricenew": 27.5, "priceold": 29, "imgsrc": "IMGS/problems/injuryrecovery/medicine/medicine3.jpg", "imgsrc1": "IMGS/problems/injuryrecovery/medicine/medicine31.jpg", "imgsrc2": "IMGS/problems/injuryrecovery/medicine/medicine32.jpg", "imgsrc3": "IMGS/problems/injuryrecovery/medicine/medicine33.jpg", "name": "Boiron Arnicare Tablets", "content": "<ul><li>Before pain gets in your way, treat it naturally at the first sign with Arnicare and feel better faster. Arnicare helps to relieve muscle pain and stiffness and to reduce pain, swelling, and discoloration from bruises. Arnicare Tablets help to relieve widespread pain relief for the whole body and may be combined with Arnicare Gel, Cream or Ointment.</li><br><li>Arnica montana (or Mountain daisy) has been used for centuries as a natural pain reliever, and today, it’s one of the most popular homeopathic medicines in the world. Arnica is trusted by professional athletes to soothe sore muscles, by prominent cosmetic surgeons to relieve post-procedure pain, and by savvy moms to treat playground bumps and bruises.</li><br><li>Arnicare Tablet's natural active ingredients help to relieve muscle pain and stiffness, swelling from injuries and discoloration from bruising. These quick-dissolving tablets do not cause drowsiness or interact with other medications.</li></ul>", "review": 74 },
    { "id": 18, "pricenew": 17.5, "priceold": 19.5, "imgsrc": "IMGS/problems/injuryrecovery/medicine/medicine4.jpg", "imgsrc1": "IMGS/problems/injuryrecovery/medicine/medicine41.jpg", "imgsrc2": "IMGS/problems/injuryrecovery/medicine/medicine42.jpg", "imgsrc3": "IMGS/problems/injuryrecovery/medicine/medicine43.jpg", "name": "Advil Pain Reliever", "content": "<ul><li>Fifty packs of 2 Advil Pain Reliever and Fever Reducer Coated Tablets, Pain Relief Medicine with Ibuprofen 2mg for Headache, Backache, Menstrual Pain and Joint Pain Relief</li><br><li>Advil ibuprofen pain reliever and fever reducer for adults provides longer lasting relief than Tylenol Extra Strength, targets pain at the sight of inflammation</li><br><li>New packaging features 20 percent less plastic to keep nearly 5,000 pounds of plastic out of landfills</li><br><li>Headache pain relief, period pain relief, back pain medication and fever medicine for adults and children 12 years and older</li><br><li>Coated Advil tablets are easy to swallow pain relievers, providing relief that lasts for up to 6 hours</li><li>Advil provides longer lasting relief than Tylenol Extra Strength and targets pain at the sight of inflammation</li><br><li>HSA and FSA eligible product</li></ul>", "review": 85 },
    { "id": 19, "pricenew": 28.5, "priceold": 30, "imgsrc": "IMGS/problems/injuryrecovery/medicine/medicine5.jpg", "imgsrc1": "IMGS/problems/injuryrecovery/medicine/medicine51.jpg", "imgsrc2": "IMGS/problems/injuryrecovery/medicine/medicine52.jpg", "imgsrc3": "IMGS/problems/injuryrecovery/medicine/medicine53.jpg", "name": "Glucosamine Chondroitin", "content": "<ul><li>DID YOU KNOW: Move Free Advanced , MSM combines heritage joint support ingredients with the clinically studied mineral complex Uniflex. Uniflex has been shown to help support joint comfort in as little as 14 days.</li><br><li>WHAT IS IT: With Glucosamine, Chondroitin, Calcium Fructoborate & MSM, this product helps support the 5 signs of joint health joint mobility, comfort, strength, flexibility, and lubrication. PLUS it provides extra cartilage support. Flavor Type: Unflavored</li><br><li>WHY MOVE FREE: Our scientists started in the fitness community, helping athletes who have experienced joint discomfort. Then it became obvious it wasn’t just athletes who needed our help. Move Free has one goal in mind: Keep you moving</li><br><li>EASIER TO SWALLOW TABLETS: Our exclusive state-of-the-art technology allows us to pack the same amount of our powerful ingredients into a smaller tablet, making it easier to take every day for the joint support you want.</li></ul>", "review": 53 },
]


//show product in page problems we treat
var page1 = ""
for (var i = 0; i < 5; i++) {
    page1 += `
        <div style="width:210px" >
                <div class="card text-center">
                <a href="productdetail.html"><img onclick="productdetaillocal(${mang[i].id})" src="${mang[i].imgsrc}"   style="width:50%;margin:auto;margin-top:10px" height="175"></a>
                <h3>${mang[i].name}</h3>
                    <p class="price text-danger">$${mang[i].pricenew}</p>
                    <p><button data-imgsrc="${mang[i].imgsrc}" data-name="${mang[i].name}" data-pricenew="${mang[i].pricenew}" class="add-to-cart btn btn-primary">Add to Cart</button></p>
                    </div>
        </div>`
}
$("#page1").html(page1)


var page2 = ""
for (var i = 5; i < 10; i++) {
    page2 += `
        <div style="width:210px" >
                <div class="card text-center">
                <a href="productdetail.html"><img onclick="productdetaillocal(${mang[i].id})" src="${mang[i].imgsrc}"   style="width:50%;margin:auto;margin-top:10px" height="175"></a>
                <h3>${mang[i].name}</h3>
                    <p class="price text-danger">$${mang[i].pricenew}</p>
                    <p><button data-imgsrc="${mang[i].imgsrc}" data-name="${mang[i].name}" data-pricenew="${mang[i].pricenew}" class="add-to-cart btn btn-primary">Add to Cart</button></p>
                    </div>
        </div>`
}
$("#page2").html(page2)


var page3 = ""
for (var i = 10; i < 15; i++) {
    page3 += `
        <div style="width:210px" >
                <div class="card text-center">
                <a href="productdetail.html"><img onclick="productdetaillocal(${mang[i].id})" src="${mang[i].imgsrc}"   style="width:50%;margin:auto;margin-top:10px" height="175"></a>
                <h3>${mang[i].name}</h3>
                    <p class="price text-danger">$${mang[i].pricenew}</p>
                    <p><button data-imgsrc="${mang[i].imgsrc}" data-name="${mang[i].name}" data-pricenew="${mang[i].pricenew}" class="add-to-cart btn btn-primary">Add to Cart</button></p>
                    </div>
        </div>`
}
$("#page3").html(page3)


var page4 = ""
for (var i = 15; i < 20; i++) {
    page4 += `
        <div style="width:210px" >
                <div class="card text-center">
                <a href="productdetail.html"><img onclick="productdetaillocal(${mang[i].id})" src="${mang[i].imgsrc}"   style="width:50%;margin:auto;margin-top:10px" height="175"></a>
                <h3>${mang[i].name}</h3>
                    <p class="price text-danger">$${mang[i].pricenew}</p>
                    <p><button data-imgsrc="${mang[i].imgsrc}" data-name="${mang[i].name}" data-pricenew="${mang[i].pricenew}" class="add-to-cart btn btn-primary">Add to Cart</button></p>
                    </div>
        </div>`
}
$("#page4").html(page4)






//show product in home page 
var showproducthomepage = "";
mang.forEach(element => {
    showproducthomepage += `
    <div class="item">
            <div class="card text-center border-0"">
                <a href="productdetail.html"><img onclick="productdetaillocal(${element.id})" src="${element.imgsrc}"  style="width:50%;margin:auto;margin-top:10px" height="175"></a>
                <h4>${element.name}</h4>
                <p class="price text-danger">$${element.pricenew}</p>
                <p><button data-imgsrc="${element.imgsrc}" data-name="${element.name}" data-pricenew="${element.pricenew}" class="add-to-cart btn btn-primary">Add to Cart</button></p>
            </div> 
    </div>`;
});

$("#showproducthomepage").html(showproducthomepage);



//show hide navbar
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbarss").style.top = "0";
  } else {
    document.getElementById("navbarss").style.top = "-70px";
  }
  prevScrollpos = currentScrollPos;
}

//carousel
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    // nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})


//check arr product detail in local
product = []
function productdetaillocal(id) {
    sessionStorage.setItem('productdetail', JSON.stringify(product));
    var xx = JSON.parse(sessionStorage.getItem('productdetail'));
    xx.push(mang[id]);
    sessionStorage.setItem('productdetail', JSON.stringify(xx));
    displayproductdetail()
}



//show product detail
function displayproductdetail() {
    var contai = JSON.parse(sessionStorage.getItem('productdetail'));
    var indexarr = contai[0]
    var contain = `<div style="padding-top:100px" class="sanphamchitiet">

    <div class="container"><a href="index.html#C1" class="btn btn-success ms-5">< Previous<a><div>
    <div class="h1 text-center pb-5">Product Detail</div>


    <div class="d-md-flex container justify-content-evenly">

      <div class="d-flex justify-content-between" style="width:525px">
        <div>
        <ul>
        <li><img onclick="changeImage(this)" src="${indexarr.imgsrc}" width="25"  height="100%">
        </li>
        <li><img onclick="changeImage(this)" src="${indexarr.imgsrc1}" width="100%" height="100%">
        </li>
        <li><img onclick="changeImage(this)" src="${indexarr.imgsrc2}" width="100%" height="100%">
        </li>
        <li><img onclick="changeImage(this)" src="${indexarr.imgsrc3}" width="100%" height="100%">
        </li>
        </ul>
        </div>

        <div style="width: 375px;text-align: center;">
            <img id="main_product_image" src="${indexarr.imgsrc}" width="350" >
        </div>
      </div>

      <div style="width:500px">
        <div class="h2">${indexarr.name}</div>
        <div class="rating">
          <span>${indexarr.review} Reviews</span>
          <input type="radio" name="rating" value="5" id="5"><label for="5">☆</label>
          <input type="radio" checked name="rating" value="4" id="4"><label for="4">☆</label>
          <input type="radio" name="rating" value="3" id="3"><label for="3">☆</label>
          <input type="radio" name="rating" value="2" id="2"><label for="2">☆</label>
          <input type="radio" name="rating" value="1" id="1"><label for="1">☆</label>
        </div>

        <div style="clear: both;" class="text-dangerit">
          <h4>$${indexarr.pricenew}</h3>
            <h6><del>$${indexarr.priceold}</del></h5>
        </div>
        <div>
          ${indexarr.content}
        </div>
        <div class="p-5" style="float:right;">
        <p><button data-imgsrc="${indexarr.imgsrc}" data-name="${indexarr.name}" data-pricenew="${indexarr.pricenew}" class="addtocart btn btn-primary">Add to Cart</button></p>

        </div>

      </div>
    </div>
  </div>`;
    document.getElementById("productdetail").innerHTML = contain
}

displayproductdetail();


//change image in product detail
function changeImage(element) {
    var main_prodcut_image = document.getElementById('main_product_image');
    main_prodcut_image.src = element.src;
}


function contact(){
    alert('Sucessful !')
}
