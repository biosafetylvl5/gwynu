---
layout: body.njk
author: Gwyn Uttmark
title: ESTRADIOL
publish: public
---

# Grey Market Estradiol


> "A grey or gray market (sometimes confused with the similar term "parallel market") refers to the trade of a commodity through distribution channels that are not authorized by the original manufacturer or trade mark proprietor. Grey market products (grey goods) are products traded outside the authorized manufacturer's channel." [Wikipedia](https://en.wikipedia.org/wiki/Grey_market)

[toc]

## SARS-CoV-2 Era Work (Spring 2020 - Present)

Having relocated, lost BIOME funding and access to a GCMS or a wet-lab my options for continuing work dramatically changed.

I made the decision to focus on creating *cheap* and *user-friendly* drug tests for estradiol (and possibly testosterone). [:musical_note:](https://open.spotify.com/track/1BIbxPcsSNOzXXDKawSwCi?si=XyvKcsCwT_KVExyeMBdFQw)

My plan is to synthesize gold nanoparticles, and then use dna aptamers to modulate their aggregation to produce a color change upon introduction of Estradiol/Testosterone.

### What makes a good drug test?

### Aptamer Based Colorimetric Sensing

On 05/16/2020, I ordered 100nmols of the 35nt aptamer from [this paper on estradiol aptamers][Alsager 2015] which I call Alsa1535. It arrived 05/22/2020.

```nucleic
Alsa1535: 5'- AAG GGA TGC CGT TTG GGC CCA AGT TCG GCA TAG TG -3'
```

On 05/27/2020, I was able to confirm that Alsa1535 binds to estradiol valerate and not just estradiol with impressive linearity (R^2^=0.9975):

![[How I made this graph](./estradiol/COVID-Era-Work.html)](./estradiol/05272020-e2-additions-curve.png)

![[How I made this graph](./estradiol/COVID-Era-Work.html)](./estradiol/estradiolValerateTitrationLinearFit.png)

The results *cannot* be in any major part attributed to the absorbtion of estradiol valerate alone:

![[How I made this graph](./estradiol/COVID-Era-Work.html)](./estradiol/estradiol-valerate-abs.png)

### Gold Nanoparticle (AuNP) Synthesis [:musical_note:](https://open.spotify.com/track/1TWNKyNQOBfNUkWWs7FooF?si=Rv9AavwQQbiKFNgX93jZcQ)

My protocol is based on [this paper from Nature][Liu 2006] [and this paper from ACS][Alsager 2015] and nessesarily exludes some steps (eg. pre-treatment of glassware with aqua regia) due to the limitations of working out of my baby brothers room. It, and my revisions can be found [in this github repository](). 

![Initial Gold Nanoparticle Synthesis 05/19/2020: Left is HAuCl4 refulxing, middle is directly after addition of Sodium Citrate and the right follows after 15m of refluxing ](./estradiol/AuNP-Synthesis-05192020.png)

The resulting concentration comes out to be 9.8nM (calculation via the Beer-Lambert law). In calculating the concentration, I noticed an interesting absorbtion spectrum for the raw nanoparticles:

![[How I made this graph](./estradiol/COVID-Era-Work.html)](./estradiol/rawAuNPwithandwithoutAptamer.png)



## BIOME Exploration (Summer 2019-Winter 2020)

> "BIOME is a student organization dedicated to providing open space for anyone interested in pursuing bioengineering and biology inspired projects." [BIOME](https://biome.bio).

After the intial quantification project, I applied for and received a project grant from [BIOME](https://biome.bio) for continued exploration. The original application timeline and budget are available [here](BIOME-GANTT-CHART-PROJECT-MILESTONES-06212019.xlsx). Like many projects the initial timeline was *far* too ambitious.

The funded goals were:

- Validation of UV-Vis as a cheaper alternative to GCMS 
- A parralellizable / fast preperation protocol for tablets with varying coatings, sizes and shapes
- Validation and generation of a sub 15 minute GCMS procedure for general purpose quantitation of estradiol in samples


### Validation of UV-Vis

![](./estradiol/biome-uv-vis-attempt3a.png)

UV-Vis was more difficult to get consistant accurate results than previous experiments would suggest. On top of that, prepping UV-Vis samples was a hassle - there were so many steps, and each sample had to be run manually without batching. 

![](./estradiol/biome-uv-vis-attempt1.png)

Eventually, I got consistantly high R^2^ values (~0.93-0.97 range) but I kept getting strange non-linear like responses that set me on edge. At this point, I set UV-Vis aside because there was a) a distinct lack of faith in my data, b) no way the procedures I was using would scale to 100s of samples and c) little hope for a frameshift change in the way sampels would need to be prepped.

![](./estradiol/biome-uv-vis-attempt2.png)

![Is this.... a non linear response? :eyes:](./estradiol/biome-uv-vis-attempt3b.png)

As time passed, I began to forget the pain of sample prep and again became curious about the source of the non-linearities of my data. Foreshadowing of times to come? Possibly.

![](./estradiol/non-linear-or-maybe-not.png)

### Tablet Prep. Protocol

Tablet preperation is important. I quickly realized that, if I'm going to run 100s of samples, I can't use my original procedure of:

- Weight tablet
- Powder pill in morter and pestle
- Weigh by transfer produced powder (~80% transfer is average)
- Wash and dry morter and pestle

it simply was too time comsuming and rife with potential human error. None of the preperation methods worked at fully dissolving all tablets - with sugar (sucrose) coated tablets being the hardiest of them all.

![Halfing and shaking at room temp for 36 hours](./estradiol/pill-biome-dissolve-a.jpg)

![Halfing and shaking with heat (50C) for 36 hours](./estradiol/pill-biome-dissolve-b.jpg)

![Quartering and shaking with heating (50C) for 36 hours](./estradiol/pill-biome-dissolve-c.jpg)



### GCMS Procedure Development

My lab notes: 

[Silylation and Methanol as an Alternative GC Solvent](./estradiol/Silylation-and-Methanol-as-an-Alternative-GC-Solvent-(W2-Winter-2020-BIOME).pdf) 

[Mixed Solvent Silylation & Further GCMS Method Development](./estradiol/Mixed-Solvent-Silylation-and-Further-GCMS-Method-Development-(Winter-2020-BIOME).pdf)

And [Various](./estradiol/10212020-Lab-Notes.pdf) [other](./estradiol/oct21-data.zip) [files](./estradiol/11092020-Lab-Notes.pdf) that are less organized and likely useless to anyone but me.


![](./estradiol/estrogen-test-kit-initial-idea.png)

## Initial Quantification Project (Spring 2019)

In Spring of 2019 I was enrolled in an [Analytical Chemistry Laboratory](https://explorecourses.stanford.edu/search?view=catalog&q=CHEM+134+Analytical+Chemistry+Laboratory&academicYear=20142015) which had a project component (which was the best part of the class imo). I, along [Julia Tanzo](https://www.researchgate.net/profile/Julia_Tanzo) worked on developing a quick and vertisile method of quatitation of Estradiol in grey market tablets. 

Below is the content we presented at the end of the class. The original poster is also available as a pdf [poster](./estradiol/Chem-134-Final-Project_(uttmark-tanzo,2019).pdf). 

***Warning:* I am unable to replicate the analysis presented in this poster. See [this page](./estradiol/CHEM-134-Validation.html) for details. In short, there is an off-by-ten discrepency that I do not have an explination for. My partner had the flu and we only had a week to create the method and collect data - please think carefully about making conclusions from these data.**

After completing this project, I found [this paper](https://doi.org/10.1590/S0100-40422010000400040) which also deals with UV quantification of estradiol.

### Determination of Estradiol Valerate Content in Grey Market HRT Tablets by Uttmark, Tanzo (Chem 134)

### Introduction

 - Estradiol is a feminizing drug used in Hormone Replacement Therapy (HRT) (with a variety of pro-drugs[^Duumlsterberg], one of which is Estradiol Valerate which we consider here)
 - Hormone Replacement Therapy (HRT) is a regimen involving the administration of “sex hormones” for, among other things, aligning secondary sexual characteristics, mental health benefits and increased life expectancy. 
 - Even for individuals that have access to conventional healthcare and are able to obtain prescriptions for feminizing HRT related drugs, injectable pro-estrogens have experienced multiple shortages in American and European pharmacies[^FDA]. These factors, among many others, have driven many transgender individuals by choice or not to use grey market alternatives[^them.]. 
- No investigation or organized effort has ever considered the purity or variability in grey market HRT drugs[^IJoT].

We aimed to fill this research and humanitarian need by looking at tablet Estradiol
Valerate purchased from an easily accessible venue (eBay) and by developing a
general purpose procedure. Here, we determined how much Estradiol Valerate was
contained in our samples, the deviation from the reported amount and the variance in
these measures across tablets.

![Estradiol Valerate](./estradiol/estradiol-molecule-134.png)

Estradiol valerate is a prodrug metabolized by enzymatic hydrolysis into the fatty acid (shown in blue) and Estradiol (shown in black) the active component in feminizing HRT

### Methods

Progynova tablets presumably containing estradiol valerate were purchased via eBay from gtxl7863 (a now shutdown seller, eBay does not permit the selling of pharmaceuticals) after a brief interview with seven (7) trans individuals who had, or who knew someone that had, procured HRT outside of a doctors prescription to confirm eBay was a reasonable venue for realistic analysis. Each tablet was powdered and dissolved in methanol (methanol and tablet quantification via weighing by difference). The samples were then sonicated at 60℃ for 36 hours to completely dissolve the tablets before filtering through a 20μm filter to remove any debris. The samples were then analyzed primarily via GCMS for quantification and secondarily via UV/Vis and IR spectroscopy to identify future quantification avenues. Samples were run on an Agilent J&W DB-5ht nonpolar column ((5%-phenyl)-methylpolysiloxane, 30m, 0.25 mm. 0.10 µm, 7 inch cage) with a general purpose method consisting of a 7 minute hold at 160℃, a ramp to 260℃ at 10℃/min to hold for 4 minutes and a 10℃/min ramp to 300℃.

![Packaging (external)](./estradiol/packaging-134.png)

![Packaging (internal)](./estradiol/packaging2-134.png)

![Tablet held for size reference](./estradiol/pill-134.png)

### Data 

This section was not on the original poster. As mentioned above, my off-by-ten attempt to replicate the calculations done here can be see [here](./estradiol/CHEM-134-Validation.html).

| Pill | GCMS Area   | Concentration (mg/mL) | Powdered Pill in Sample (g) | Initial Pill Weight | Estimated Estradiol Valerate in Pill (mg) | Confidence Interval (mg)|
|------|-------------|-----------------------|-----------------------------|---------------------|-------------------------------------------|---------------------|
| 1    | 6761580.64  | 0.10318               | 0.0977                      | 0.1445              | 1.52694                                   | 0.05206             |
| 2    | 6107657.14  | 0.09371               | 0.1093                      | 0.1395              | 1.19717                                   | 0.04493             |
| 3    | 6153476.16  | 0.09437               | 0.0951                      | 0.1313              | 1.30907                                   | 0.0486              |
| 4    | 6179034.76  | 0.09474               | 0.1017                      | 0.136               | 1.27196                                   | 0.04707             |
| 5    | 6975218.59  | 0.10627               | 0.1207                      | 0.1394              | 1.22867                                   | 0.04065             |
| 6    | 7355210.59  | 0.11177               | 0.1204                      | 0.1355              | 1.26107                                   | 0.03961             |
| 7    | 8286964.05  | 0.12527               | 0.1069                      | 0.1288              | 1.51011                                   | 0.04241             |
| 8    | 10433601.48 | 0.15635               | 0.1286                      | 0.1428              | 1.74431                                   | 0.03909             |
| 9    | 7987559.16  | 0.12093               | 0.1242                      | 0.1409              | 1.37337                                   | 0.03993             |
| 10   | 7206660.82  | 0.10962               | 0.1267                      | 0.1361              | 1.17814                                   | 0.03781             |

The raw data is also available [here](./estradiol/134-data-raw.csv) as a csv file.

### Results

We quantified ten estradiol valerate tablets. While their reported estradiol valerate content was 1 mg/tablet, we instead found their estradiol valerate content to be on average 1.36 mg/tablet with a variance of 0.0295 mg^2^. We identified no correlation (R^2^=0.25) between either tablet weight and estradiol content or peak area. See below for tablet quantification distrbution.

![Tablet quantification with 95% confidence error intervals](./estradiol/tablet-quant-134.png)


![External estradiol standard Curve (GCMS), R^2^=0.9905](./estradiol/external-standard-134.png)

![Estradiol valerate’s electron ionization fragmentation (M+ m/z = 356.3)](./estradiol/ei-fragmentation-134.png)

![Estradiol chromatogram peak (RT = 17.507 min, M+ m/z = 272.2)](./estradiol/ev-peak-134.png)

![Estradiol valerate chromatogram peak (RT = 22.708 min, M+ m/z = 356.3)](./estradiol/estradiol-peak-134.png)

We also briefly explored UV/Vis and IR spectrometry as an alternative analysis method as it is both cheaper and faster than GCMS. While IR showed no peaks for quantification of an estradiol standard,  UV/Vis spectroscopy did, with a peak at 289 nm having a linear dependance on solution concentration (n=4, R2=0.9958). However, the same absorbance peak was not identified in estradiol valerate nor did we have enough estradiol sample to analyze a real world example for a proof-of-concept.

![UV/Vis peaks at varying concentrations of estradiol standard](./estradiol/uv-vis-quant-134.png)

### Conclusion // Future Work

We have found the estradiol valerate content of grey market HRT tablets to greatly differ from their reported values. While it is still unclear as to the effects of varying dosage on transitioning, it is known that varying estradiol supplements in postmenopausal women increases risk for deep vein thrombosis which is not uncommonly fatal[^Townsend]. For these reasons, it is very important that further work is done to determine the risk associated with “DIY” HRT. We have found that UV/Vis spectroscopy is a promising avenue for continuing quantification of different grey market HRT alternatives that contain estradiol (but not estradiol valerate) without the cost and time associated with GCMS.

**This class project was funded by Stanford University and any generated IP is open sourced under a [LISCENCE].**


[^Duumlsterberg]: B. Duumlsterberg, M. Schmidt-Gollwitzer, and M. Huumlmath-semicolonmpel, “Pharmacokinetics and biotransformation of estradiol valerate in ovariectomized women,” Hormone Research, vol. 21, no. 3, pp. 145–154, 1985

[^FDA]: T. U. S. F. D. Administration, “Fda drug shortages.” https://www.accessdata.fda.gov/scripts/drugshortages/dsp_ActiveIngredientDetails.cfm?AI=Estradiol%20Valerate%20Injection,%20USP&st=c

[^them.]: C. Nast, “How an estrogen shortage is making life hell for trans femmes.” https://www.them.us/story/estrogen-shortage-estradiol-valerate.

[^IJoT]: Coleman et, al. “Standards of care for the health of transsexual, transgender, and gender-nonconforming people, version 7,” International Journal of Transgenderism, vol. 13, pp. 165–232, Aug. 2012

[^Townsend]: M. Townsend, H. Jaffer, and L. Goldman, “Adverse health outcomes in transgender people,” Canadian Medical Association Journal, vol. 189, pp. E1046–E1046, Aug. 2017

[Liu 2006]: https://sci-hub.tw/https://www.nature.com/articles/nprot.2006.38

[Alsager 2015]: https://pubs.acs.org/doi/full/10.1021/acs.analchem.5b00335?src=recsys