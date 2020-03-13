---
title: Exonuclease T Literature Review
author: Gwyn Uttmark & Michael Arcidiacono
layout: body.njk
---

{% macro doi(doi) %}[{{doi | replace("--", "/") | replace("-", ".")}}](https://doi.org/{{doi | replace("--", "/") | replace("-", ".")}}) [&#x1D54A;](https://sci-hub.tw/{{doi | replace("--", "/") | replace("-", ".")}}){% endmacro %}

{% macro pmcid(pmid) %}[PMCID: {{pmid}}](https://www.ncbi.nlm.nih.gov/pmc/articles/{{pmid}}/){% endmacro %}

{% macro pmid(pmid) %}[PMID: {{pmid}}](https://www.ncbi.nlm.nih.gov/pubmed/{{pmid}}){% endmacro %}

# Exonuclease T Literature Review

**[introduction//motivation//goals]**

[[toc]]

## Overview

[![](https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggQlRcblx0QVtEZXV0c2NoZXIgMTk4NDogPGJyLz5Jbml0aWFsIERpc2NvdmVyeV0gLS0-IEJbRGV1dHNjaGVyIDE5ODVhOiA8YnIvPlB1cmlmaWNhdGlvbiBhbmQgZnVydGhlciBjaGFyYWN0ZXJpemF0aW9uXVxuIiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQifSwidXBkYXRlRWRpdG9yIjpmYWxzZX0)](https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoiZ3JhcGggQlRcblx0QVtEZXV0c2NoZXIgMTk4NDogPGJyLz5Jbml0aWFsIERpc2NvdmVyeV0gLS0-IEJbRGV1dHNjaGVyIDE5ODVhOiA8YnIvPlB1cmlmaWNhdGlvbiBhbmQgZnVydGhlciBjaGFyYWN0ZXJpemF0aW9uXVxuIiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQifSwidXBkYXRlRWRpdG9yIjpmYWxzZX0)
```uml
graph BT
	A[Deutscher 1984: <br/>Initial Discovery] --> B[Deutscher 1985a: <br/> Purification and further characterization]
```


## Methodology

A PubMed search for various names for Exonuclease T (rnase t, ribonuclease t, exo t, exoribonuclease T and exonuclease T)  in abstracts, titles and section titles of archived papers via a [pubmed query](https://www.ncbi.nlm.nih.gov/pmc/?term=((((((((((((((((((%22exo+T%22%5BAbstract%5D)+OR+%22exoribonuclease+T%22%5BAbstract%5D)+%22exonuclease+T%22%5BAbstract%5D)+OR+%22ribonuclease+t%22%5BAbstract%5D)+OR+%22rnase+t%22%5BAbstract%5D)+OR+%22exo+T%22%5BTitle%5D)+OR+%22exoribonuclease+T%22%5BTitle%5D)+OR+%22ribonuclease+t%22%5BTitle%5D)+OR+%22exonuclease+T%22%5BTitle%5D)+OR+%22rnase+t%22%5BTitle%5D)+OR+%22exo+T%22%5BSection+Title%5D)+OR+%22exoribonuclease+T%22%5BSection+Title%5D)+OR+%22ribonuclease+t%22%5BSection+Title%5D)+OR+%22exonuclease+T%22%5BSection+Title%5D))+OR+%22rnase+t%22%5BSection+Title%5D)+NOT+%22ribonuclease+T1%22)+NOT+%22rnase+T1%22)+NOT+%22TREX1%22)[^pubmed-query] excluding confounding terms (ribonuclease T1, rnase t1 and TREX1) returned 28 papers on March 10th, 2020. After manual inspection, this pool was reduced to [INSERT # OF USEFUL PAPERS HERE]. Our summaries of these papers can be found here, along with our conclusions on the current state of the literature.

[![](https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggVERcblx0QVtcXFB1Yk1lZCBxdWVyeSBmb3IgRXhvbnVjbGVhc2UgVC9dIC0tPnwyOCBQYXBlcnN8IEJbXFxTY3JlZW4gZm9yIFJlbGV2YW5jeS9dO1xuXHRCIC0tPiB8XCIyMyBQYXBlcnMgKG5ldCAtNSlcInwgQ1tcXENpdGF0aW9uIFNlYXJjaC9dIFxuXHRDIC0tPiB8XCIyNCBQYXBlcnMgKG5ldCArMSlcInwgRFtTZWxlY3Rpb24gZm9yIFJldmlld10iLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9LCJ1cGRhdGVFZGl0b3IiOmZhbHNlfQ)](https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoiZ3JhcGggVERcblx0QVtcXFB1Yk1lZCBxdWVyeSBmb3IgRXhvbnVjbGVhc2UgVC9dIC0tPnwyOCBQYXBlcnN8IEJbXFxTY3JlZW4gZm9yIFJlbGV2YW5jeS9dO1xuXHRCIC0tPiB8XCIyMyBQYXBlcnMgKG5ldCAtNSlcInwgQ1tcXENpdGF0aW9uIFNlYXJjaC9dIFxuXHRDIC0tPiB8XCIyNCBQYXBlcnMgKG5ldCArMSlcInwgRFtTZWxlY3Rpb24gZm9yIFJldmlld10iLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9LCJ1cGRhdGVFZGl0b3IiOmZhbHNlfQ)
```uml
graph TD
	A[\PubMed query for Exonuclease T/] -->|28 Papers| B[\Screen for Relevancy/];
	B --> |"23 Papers (net -5)"| C[\Citation Search/] 
	C --> |"24 Papers (net +1)"| D[Selection for Review]
```


## Papers

Review Format:

```markdown
### Title (Publication Date)
Author(s):

[summary // commentary // data // etc.]

{doi("10-1093--nar--gkz133")} (with two curly brackets)

{pmid("PMC6468291")}
```

### Dual expression of CCA-adding enzyme and RNase T in Escherichia coli generates a distinct cca growth phenotype with diverse applications (2019)
**Authors:** Karolin Wellner, Marie-Theres Pöhler, Heike Betat, Mario Mörl  **Reviewer**: Gwyn

{{doi("10-1093--nar--gkz133")}} 

{{pmid("PMC6468291")}}

### Examining tRNA 3′-ends in Escherichia coli: teamwork between CCA-adding enzyme, RNase T, and RNase R
Karolin Wellner, Andreas Czech, Zoya Ignatova, Heike Betat, Mario Mörl
RNA. 2018 Mar; 24(3): 361–370.  doi: 10.1261/rna.064436.117
PMCID: PMC5824355

### Endonucleolytic cleavages by RNase E generate the mature 3′ termini of the three proline tRNAs in Escherichia coli
Bijoy K. Mohanty, Jessica R. Petree, Sidney R. Kushner
Nucleic Acids Res. 2016 Jul 27; 44(13): 6350–6362.  Published online 2016 Jun 10. doi: 10.1093/nar/gkw517
PMCID: PMC5291269

### The cutting edges in DNA repair, licensing, and fidelity: DNA and RNA repair nucleases sculpt DNA to measure twice, cut once
Susan E. Tsutakawa, Julien Lafrance-Vanasse, John A. Tainer
DNA Repair (Amst) Author manuscript; available in PMC 2015 Jul 1.Published in final edited form as: DNA Repair (Amst). 2014 Jul; 19: 95–107. Published online 2014 Apr 19.  doi: 10.1016/j.dnarep.2014.03.022
PMCID: PMC4051888

###  Mycobacterium tuberculosis Rv2179c Protein Establishes a New Exoribonuclease Family with Broad Phylogenetic Distribution
Jan Abendroth, Anja Ollodart, Emma S. V. Andrews, Peter J. Myler, Bart L. Staker, Thomas E. Edwards, Vickery L. Arcus, Christoph Grundner
J Biol Chem. 2014 Jan 24; 289(4): 2139–2147.  Published online 2013 Dec 4. doi: 10.1074/jbc.M113.525683
PMCID: PMC3900960

###  Deregulation of poly(A) polymerase I in Escherichia coli inhibits protein synthesis and leads to cell death
Bijoy K. Mohanty, Sidney R. Kushner
Nucleic Acids Res. 2013 Feb; 41(3): 1757–1766.  Published online 2012 Dec 14. doi: 10.1093/nar/gks1280
PMCID: PMC3561954

###  Gateway Role for rRNA Precursors in Ribosome Assembly
Nancy S. Gutgsell, Chaitanya Jain
J Bacteriol. 2012 Dec; 194(24): 6875–6882.  doi: 10.1128/JB.01467-12
PMCID: PMC3510557

###   Role of precursor sequences in the ordered maturation of E. coli 23S ribosomal RNA
Nancy S. Gutgsell, Chaitanya Jain
RNA. 2012 Feb; 18(2): 345–353.  doi: 10.1261/rna.027854.111
PMCID: PMC3264920

###   Processing of the Escherichia coli leuX tRNA transcript, encoding tRNALeu5, requires either the 3′→5′ exoribonuclease polynucleotide phosphorylase or RNase P to remove the Rho-independent transcription terminator
Bijoy K. Mohanty, Sidney R. Kushner
Nucleic Acids Res. 2010 Jan; 38(2): 597–607.  Published online 2009 Nov 11. doi: 10.1093/nar/gkp997
PMCID: PMC2811032

###   Crystal Structure of RNase T, an exoribonuclease involved in tRNA maturation and end-turnover
Yuhong Zuo, Heping Zheng, Yong Wang, Maksymilian Chruszcz, Marcin Cymborowski, Tatiana Skarina, Alexei Savchenko, Arun Malhotra, Wladek Minor
Structure. Author manuscript; available in PMC 2008 Apr 1.Published in final edited form as: Structure. 2007 Apr; 15(4): 417–428.  doi: 10.1016/j.str.2007.02.004
PMCID: PMC1907377

###   Exoribonuclease superfamilies: structural analysis and phylogenetic distribution
Yuhong Zuo, Murray
 P. Deutscher
Nucleic Acids Res. 2001 Mar 1; 29(5): 1017–1026.  doi: 10.1093/nar/29.5.1017
PMCID: PMC56904

###   The DNase activity of RNase T and its application to DNA cloning.
Y Zuo, M P Deutscher
Nucleic Acids Res. 1999 Oct 15; 27(20): 4077–4082.  doi: 10.1093/nar/27.20.4077
PMCID: PMC148676

###   Identification of RNase T as a high-copy suppressor of the UV sensitivity associated with single-strand DNA exonuclease deficiency in Escherichia coli.
M Viswanathan, A Lanjuin, S T Lovett
Genetics. 1999 Mar; 151(3): 929–934.  
PMCID: PMC1460521

###   The proofreading domain of Escherichia coli DNA polymerase I and other DNA and/or RNA exonuclease domains.
M J Moser, W R Holley, A Chatterjee, I S Mian
Nucleic Acids Res. 1997 Dec 15; 25(24): 5110–5118.  doi: 10.1093/nar/25.24.5110
PMCID: PMC147149

###   The gene for the longest known Escherichia coli protein is a member of helicase superfamily II.
N B Reuven, E V Koonin, K E Rudd, M P Deutscher
J Bacteriol. 1995 Oct; 177(19): 5393–5400.  doi: 10.1128/jb.177.19.5393-5400.1995
PMCID: PMC177343

###   The tRNA processing enzyme RNase T is essential for maturation of 5S RNA.
Z Li, M P Deutscher
Proc Natl Acad Sci U S A. 1995 Jul 18; 92(15): 6883–6886.  doi: 10.1073/pnas.92.15.6883
PMCID: PMC41434

###   RNase T shares conserved sequence motifs with DNA proofreading exonucleases.
E V Koonin, M P Deutscher
Nucleic Acids Res. 1993 May 25; 21(10): 2521–2522.  doi: 10.1093/nar/21.10.2521
PMCID: PMC309564

###   The presence of only one of five exoribonucleases is sufficient to support the growth of Escherichia coli.
K O Kelly, M P Deutscher
J Bacteriol. 1992 Oct; 174(20): 6682–6684.  doi: 10.1128/jb.174.20.6682-6684.1992
PMCID: PMC207653

###   RNase T affects Escherichia coli growth and recovery from metabolic stress.
K P Padmanabha, M P Deutscher
J Bacteriol. 1991 Feb; 173(4): 1376–1381.  doi: 10.1128/jb.173.4.1376-1381.1991
PMCID: PMC207273

###   Localization of the Escherichia coli rnt gene encoding RNase T by using a combination of physical and genetic mapping.
L M Case, X N Chen, M P Deutscher
J Bacteriol. 1989 Oct; 171(10): 5736–5737.  doi: 10.1128/jb.171.10.5736-5737.1989
PMCID: PMC210422

###   tRNA nucleotidyltransferase is not essential for Escherichia coli viability.
L Zhu, M P Deutscher
EMBO J. 1987 Aug; 6(8): 2473–2477.  
PMCID: PMC553656

###   RNase T is responsible for the end-turnover of tRNA in Escherichia coli. (1985)
**Authors:** M P Deutscher, C W Marlor, R Zaniewski **Summarized by:** Gwyn **Source:** Pubmed Search

{{doi("10-1073--pnas-82-19-6427")}} 
{{pmcid("PMC390729")}}

### Purification and characterization of Escherichia coli RNase T. (1985)
**Authors:** M P Deutscher, C W Marlor **Summarized by:** Gwyn **Source:** Citation

This paper purified Exonuclease T and did more characterization *in vitro*.

It was newly found that Exonuclease T:

- is an $alpha_2$ dimer with a monomer weight of 25kDa
- has a $K_m$ of 14$\mu$M for total tRNA which was notably low for an enzyme that binds DNA during catalysis
- exclusively hydrolyses the 3' end and does not act on the 5' end of RNA
- is extremely sensitive to:
	+ oxidation:
		* "we repeatedly observed loss of enzyme activity which could be reversed almost completely by incubation with the reducing agent. This problem could be eliminated by maintaining RNase T in 10-fold higher levels of dithiothreitol"
	+ sulfhydryl group reagents:
		* " agreement with its sensitivity to oxidation (see above), RNase T is also rapidly inactivated by a variety of reagents which react with sulfhydryl groups. In two cases, that of p-hydroxymercuribenzoate andmercuric chloride,the inactivation could be reversed by incubation with high concentrations of dithiothreitol. These data indicate that RNase T contains one or more sulfhydryl groups that are important for the catalytic activity and/or the structure of this enzyme."
- is mildly sensitive to ionic strengths:
	+ "Fifty per cent inhibition was observed at 100 mM KCl, and essentially complete inhibition was found at 250 mM KCl."
- maintains 80-90% of activity for at least 6 month when stored at -20C
- is sensitive to dilution, but it's hypothesized that bovine serum albumin stabilizes this type of inactivation
- acts on tRNA-CC at 1% of the rate of tRNA-CCA terminal hydrolysis

Further, previous attributes of Exonuclease T were characterized more fully:

- in addition to a pH of 8-9 being optimal, Exonuclease T exhibits 50% of optimal activity at pHs of 7.2 and 9.6
- the reported optimal cation concentration was futher elaborated on:
    + the optimal Mg2+ concentration changed from 3-10mM to 2-5mM
    + the optimal Mn2+ concentration was reported as 1mM
- the activity associated with Co2+ at 2-10mM was  found result in 20% of the activity associated with optimal Mg2+ concentration
- it was found that Cu2+, Zn2+, Ba2+, Ca2+, CdZ+, and Hg2+ displayed no activity at either 1 or 5 mM
- the temperature sensitivity was further quantified
	+ "RNase T is extremely sensitive to temperature inactivation, losing as much as 80% of its activity in a 5-min preincubation in buffer A at 37 "C, and 90% in 20 min at this temperature. The presence of 1 M KC1 could protect theenzyme against this inactivation, with only 15% of RNase T activity being lost in 5min under these conditions and 25% in 20 min. tRNA also afforded some protection with a loss of 35% of the activity in 5 min, although by 20 min RNaseT was 85% inactivated."

{{pmid("3888994")}} (no associated DOI)

### Ribonuclease T: new exoribonuclease possibly involved in end-turnover of tRNA. (1984)
**Authors:** M P Deutscher, C W Marlor, R Zaniewski **Summarized by:** Gwyn **Source:** Pubmed Search

This paper discovered the existence of  Exonuclease T in *E. coli* and named it "RNAse T" at the time because of it's (then hypothesized) role in tRNA turnover.

It was found that, with a base substrate of tRNA-CCA, Exonuclease T:

- is an exonuclease that acts on tRNA
- had a pH optimum in the range of pH 8-9
- required Mg2+, Mn2+, or Co2+ with Mg2+ in the range of 3-10mM being best. 
- is strongly inhibited by salts at ionic strengths in excess of
50 mM
- is very sensitive to heat inactivation, losing half of its activity in 7 min at 45C
- digests in a random fashion
- initiated attack at the 3' terminus, requiring a free 3' hydroxyl group
- exhibited substrate sensitivity with:
	+ CTP cleavage 10% of that of ATP
	+ UTP cleavage was much slower than that of ATP
	+ Both tRNA-CC and tRNA-CCACC demonstrating reduced acitivity relative to tRNA-CCA
- it was found that Poly(A) was inactive as a substrate
    
{{doi("10-1073--pnas-81-14-4290")}} 
{{pmcid("PMC345573")}}


## Not about Exonuclease T

### Novel EXO-T vaccine using polyclonal CD4+ T cells armed with HER2-specific exosomes for HER2-positive breast cancer
Rong Li, Rajni Chibbar, Jim Xiang
Onco Targets Ther. 2018; 11: 7089–7093.  Published online 2018 Oct 17. doi: 10.2147/OTT.S184898
PMCID: PMC6200095

**Not about Exonuclease T**

### In This Issue

Protein Sci. 2015 Dec; 24(12): v.  Published online 2015 Nov 25. doi: 10.1002/pro.2847
PMCID: PMC4815225

**Not about Exonuclease T**

###   Nucleotide sequence of formylmethionine tRNA from an extreme thermophile, Thermus thermophilus HB 8
Kimitsuna Watanabe, Yoshiyuki Kuchino, Ziro Yamaizumi, Mayumi Kato, Tairo Oshima, Susumu Nishimura
Nucleic Acids Res. 1978 Jul 1; 5(Suppl 2): s473–s478.  doi: 10.1093/nar/1.suppl_2.s473
PMCID: PMC6581399

**Not about Exonuclease T**

###   Leaving-group effects on the ribonuclease T 1 -catalyzed transphosphorylation of specific substrates
Mitsuhiro Itaya, Yasuo Inoue
Nucleic Acids Res. 1978 Jul 1; 5(Suppl 2): s397–s402.  doi: 10.1093/nar/1.suppl_2.s397
PMCID: PMC6581318

**Not about Exonuclease T**

###  Nucleotide sequence complexities, molecular weights, and poly(A) content of the vesicular stomatitis virus mRNA species.
J K Rose, D Knipe
J Virol. 1975 Apr; 15(4): 994–1003.  
PMCID: PMC354544

**Not about Exonuclease T**


[^pubmed-query]: [(((((((((((((((((("exo T"[Abstract]) OR "exoribonuclease T"[Abstract]) "exonuclease T"[Abstract]) OR "ribonuclease t"[Abstract]) OR "rnase t"[Abstract]) OR "exo T"[Title]) OR "exoribonuclease T"[Title]) OR "ribonuclease t"[Title]) OR "exonuclease T"[Title]) OR "rnase t"[Title]) OR "exo T"[Section Title]) OR "exoribonuclease T"[Section Title]) OR "ribonuclease t"[Section Title]) OR "exonuclease T"[Section Title])) OR "rnase t"[Section Title]) NOT vaccine) NOT "ribonuclease T1") NOT "rnase T1") NOT "TREX1")](https://www.ncbi.nlm.nih.gov/pmc/?term=((((((((((((((((((%22exo+T%22%5BAbstract%5D)+OR+%22exoribonuclease+T%22%5BAbstract%5D)+%22exonuclease+T%22%5BAbstract%5D)+OR+%22ribonuclease+t%22%5BAbstract%5D)+OR+%22rnase+t%22%5BAbstract%5D)+OR+%22exo+T%22%5BTitle%5D)+OR+%22exoribonuclease+T%22%5BTitle%5D)+OR+%22ribonuclease+t%22%5BTitle%5D)+OR+%22exonuclease+T%22%5BTitle%5D)+OR+%22rnase+t%22%5BTitle%5D)+OR+%22exo+T%22%5BSection+Title%5D)+OR+%22exoribonuclease+T%22%5BSection+Title%5D)+OR+%22ribonuclease+t%22%5BSection+Title%5D)+OR+%22exonuclease+T%22%5BSection+Title%5D))+OR+%22rnase+t%22%5BSection+Title%5D)+NOT+%22ribonuclease+T1%22)+NOT+%22rnase+T1%22)+NOT+%22TREX1%22))


