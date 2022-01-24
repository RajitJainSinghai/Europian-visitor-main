import React from 'react';
import Header from '../components/Header';
import SinglePlace from '../assets/img/single-place.png';
import Maps from '../assets/img/maps.png';
import Footer from '../components/Footer';

function Detail() {
    return (
        <>
            <Header />
            <img class="single-place" src={SinglePlace} alt="" />
            <p class="detail-heading">Lauterbrunnen Valley, Switzerland</p>
            <p class="detail-discription">
                Like something straight out of The Sound of Music, the Lauterbrunnen Valley is endlessly picturesque,
                thanks to its green valleys, snowy peaks and charming alpine villages. Lauterbrunnen is first mentioned
                in 1240 as in claro fonte. In 1304 it was mentioned as Luterbrunnen. The oldest trace of a settlement in
                the area is a single Roman coin which was discovered in the Blumental. When the Lauterbrunnen Valley
                first appears in the historic record, during the 13th century, it was owned by the Freiherr of
                Wädenswil. In 1240 the Freiherr of Wädenswil sold the Sefinen Valley to Interlaken Monastery. Over the
                following century, the Monastery and other local lords began to expand their power in the Lauterbrunnen
                and neighboring valleys. However, around 1300, the Lord of Turn began to settle his Walser speaking
                people in the nearby Lötschen Valley and into the highlands of the Lauterbrunnen Valley. By 1346, the
                Walser villages of Lauterbrunnen, Gimmelwald, Mürren, Sichellauenen and Trachsellauenen all had village
                governments and a certain amount of independence from the Monastery. Three years later, much of the
                Bernese Oberland unsuccessfully rose up against Monastery. When the Monastery suppressed the rebellion,
                the Walser villages bore the brunt of the Monastery’s wrath. By the 15th century, the villages of the
                valley were part of the large parish of Gsteig bei Interlaken (now part of Gsteigwiler). Between 1487
                and 1488, the villagers in Lauterbrunnen built a filial church of the parish. In 1506, the parish
                appointed a full-time priest for Lauterbrunnen. In 1528, the city of Bern adopted the new faith of the
                Protestant Reformation and began imposing it on the Bernese Oberland. Lauterbrunnen joined many other
                village and the Monastery in an unsuccessful rebellion against the new faith. After Bern imposed its
                will on the Oberland, they secularized the Monastery and annexed all the Monastery lands. Lauterbrunnen
                became the center of a new Reformed parish. Mines were built in the Trachsellauenen area in the upper
                valley beginning in the late 16th century. An iron smelter was built in Zweilütschinen (now part of
                Gündlischwand) in 1715 to process the iron ore from Trachsellauenen. However most of the money from the
                mines went to the noble landowners. The villagers remained very poor. In the 17th and 18th centuries the
                poverty was so widespread that many of the villagers joined mercenary regiments or emigrated. A majority
                of the emigrants moved to the Carolinas in the United States. Beginning in the late 18th century,
                foreign mountain climbers began to use Lauterbrunnen as a starting point for their expeditions into the
                nearby Alps. Initially the climbers stayed in the village rectory. However, as Lauterbrunnen’s fame grew
                and with the completion of a road from Interlaken in 1834 and the 1890 Bernese Oberland Railway, more
                hotels were needed for tourists. As new hotels were built, other tourist infrastructure was also built
                in the village. They built cable cars to Mürren in 1891 and to Wengen in 1893. But the most significant
                piece of infrastructure was the Jungfrau railway which was built in 1912. The Jungfrau rack railway runs
                9 km (5.6 mi) from Kleine Scheidegg to the highest railway station in Europe at Jungfraujoch. The
                railway runs almost entirely within a tunnel built into the Eiger and Mönch mountains and contains two
                stations in the middle of the tunnel, where passengers can disembark to observe the neighboring
                mountains through windows built into the mountainside. In 1909 the English brothers Walter and Arnold
                Lunn popularized skiing, curling and bobsledding at Lauterbrunnen. These winter sports provided a whole
                new group of winter tourists and converted the summer tourist industry into a year-round business. The
                tourist economy of Lauterbrunnen was devastated due to World War I and II and the Great Depression.
                However, following the end of World War II, tourism rebounded. Many new vacation homes and chalets were
                built along with ski lifts, chair lifts and a heliport..
            </p>
            <img class="maps" src={Maps} alt="" />
            <Footer />
        </>
    );
}

export default Detail;
