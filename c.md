

Problem C：

How to Diagnose Alzheimer's Disease Using Brain Structural Features and Cognitive Behavioral Features

Alzheimer's disease (AD) is a progressive neurodegenerative disease with an insidious onset. It is characterized clinically by a full spectrum of dementia, including memory impairment, aphasia, dysfluency, agnosia, impairment of visuospatial skills, executive dysfunction, and personality and behavioral changes, the cause of which is still unknown. It is characterized by a progressive decline in the ability to perform activities of daily living, with various neuropsychiatric symptoms and behavioral disturbances. The disease is usually progressive in the elderly, with progressive loss of independent living skills and death from complications 10 to 20 years after the onset of the disease.

The preclinical stage of Alzheimer's disease, also known as mild cognitive impairment (MCI), is a transitional state between normal and severe. Due to the limited cognition of the disease by patients and their families, 67% of patients were diagnosed as moderate to severe and had missed the best intervention stage. Therefore, early and accurate diagnosis of Alzheimer's disease and mild cognitive impairment is of great significance. 

The attached data contain specific information characteristics of 4850 cognitive normal elderly (CN), 1416 patients with subjective memory complaint (SMC), 2968 patients with early mild cognitive impairment (EMCI), 5236 patients with late mild cognitive impairment (LMCI) and 1738 patients with Alzheimer's disease (AD) collected at different time points (one time point is a quantity). Please use the brain structural characteristics and cognitive behavioral characteristics of the different categories of people provided in the Appendix to construct an Alzheimer's disease identification model and design an intelligent diagnostic method to accurately diagnose .

（1）Preprocess the characteristic indicators of the attached data to investigate the correlation between data characteristics and the diagnosis of Alzheimer's disease. 

（2）Use the attached structural brain features and cognitive behavioral features to design an intelligent diagnosis of Alzheimer's disease.

（3）First, cluster CN, MCI and AD into three major classes. Then, for the three subclasses contained in MCI (SMC, EMCI, and LMCI), the clustering was continued to be refined into three subclasses. 

（4）The same sample in the annex contains features collected at different time points, please analyze them in relation to the time points to uncover patterns in the evolution of different categories of diseases over time. 

（5）Please consult the relevant literature to describe the early intervention and diagnostic criteria for the five categories of CN, SMC, EMCI, LMCI, and AD

如何利用大脑结构特征和认知行为特征诊断阿尔茨海默病
阿尔茨海默病（AD）是一种进展性神经退行性疾病，发病隐匿。它的临床特征是全方位的痴呆，包括记忆障碍、失语、语言障碍、失认症、视觉空间技能障碍、执行功能障碍以及人格和行为改变，其原因仍然未知。其特征是日常生活活动能力的逐渐下降，伴有各种神经精神症状和行为障碍。这种疾病通常在老年人中进行，在发病后10至20年内逐渐丧失独立生活技能并死于并发症。
阿尔茨海默病的临床前阶段，也称为轻度认知障碍（MCI），是正常和严重之间的过渡状态。由于患者及其家属对该疾病的认知有限，67%的患者被诊断为中度至重度，并错过了最佳干预阶段。因此，早期准确诊断阿尔茨海默病和轻度认知障碍具有重要意义。
所附数据包含在不同时间点收集的4850名认知正常老年人（CN）、1416名主观记忆障碍患者（SMC）、2968名早期轻度认知障碍患者（EMCI）、5236名晚期轻度认知障碍（LMCI）和1738名阿尔茨海默病患者（AD）的特定信息特征（一个时间点是一个数量）。请使用附录中提供的不同类别人群的大脑结构特征和认知行为特征来构建阿尔茨海默病识别模型，并设计智能诊断方法以准确诊断。

（1） 预处理所附数据的特征指标，以调查   ‘数据特征’ 与  ‘阿尔茨海默病诊断’    之间的相关性。
（2） 利用 附加 的大脑结构特征和认知行为特征来设计阿尔茨海默病的智能诊断。
（3） 首先，将CN、MCI和AD分为三大类。然后，对于MCI中包含的三个子类（SMC、EMCI和LMCI），继续将聚类细化为三个子类。
（4） 附件中的同一样本包含在不同时间点收集的特征，请根据时间点对其进行分析，以揭示不同类别疾病随时间演变的模式。
（5） 请查阅相关文献，描述CN、SMC、EMCI、LMCI和AD五类的早期干预和诊断标准



(1) 预处理信息， 首先排除数据缺失70%以上的数据。然后将数据进行离散化和归一化处理。接着对数据进行相关性分析，得到不同变量之间的皮尔曼系数，分析


使用missForest插补法进行缺失值插补，引用[文献](#阿尔茨海默病数据分析与早期症象提取_陈浩)

(2) 大脑结构特征和认知行为特征 使用特性++与++ 所以使用进行分析。

(3) 聚类分析

使用聚类分析，
首先构造CN、MCI和AD分类模型。
然后根据MCI的分类继续划分SMC、EMCI和LMCI的分类模型。

(4)
CDRSB  
随着月份增长，呈现出增加的趋势，
MOCA

EcogPtTotal

EcogSPTotal

Ventricles

Hippocampus

WholeBrain

Entorhinal

Fusiform

MidTemp

ICV









(5)
CN、SMC、EMCI、LMCI和AD五类主要是体现阿尔兹海默症病状的从轻到重的表现。
早期干预：
运动干预[1]和[2]
运动对阿尔兹海默症的干扰，运动会促进海马体神经的发生改善脑部结构以及神经系统的信息的传递；运动可以使血管单元正常，减少神经元凋亡。
[3]护理干预
AD功能缺陷会随着病情的进展变得越来越明显
认知护理可提高AD患者遵医行为的依从性
护理干预可促进AD患者角色功能和社会功能康复
一般心理干预，缓解焦虑、抑郁等负面情绪，
记忆障碍的干预，强化记忆锻炼，增加信息刺激量，
智力障碍的干预 强化记忆锻炼
逻辑思维障碍的干预 
日常生活能力的训练 安全防护 组织与培训
干预后 患者的个人行为能力量表（ADL）得分明显提高。

诊断标准：
结合数据，第一题的数据特征与阿尔兹海默症诊断的相关性，哪类数值异常会可能体现出病症的发生。使用第二题的模型，即大脑结构特征以及认知行为特征的表现对阿尔兹海默症的诊断。
[4]利用廉价的AD生物标记物品——唾液中乙酰胆碱酯酶、微管相关蛋白、微管相关蛋白、β-淀粉样蛋白(Aβ)等蛋白质的含量判断。
[5]利用功能核磁共振影像，以及深度学习方法进行早期的阿尔兹海默症的诊断。



相关文献：
[1]董培海,李思琦,朱磊.运动干预阿尔茨海默病机制的研究进展[J].湖北体育科技,2021,40(07):636-640.
摘要:阿尔茨海默症(AD)是一种由脑神经细胞凋亡而造成的不可逆的神经退行性疾病,众多治疗手段只能减缓发病进程,运动作为非药物性治疗手段对AD有明显改善作用,但运动干预AD的具体途径仍不清晰。目的为运动通过何种途径干预AD,方法通过关键词检索Pub Med、web of science、中国知网(CNKI)等数据库筛选相关文章,结果发现运动会介导免疫系统、神经血管单元、神经元凋亡及信息传递过程影响AD。结论发现运动干预AD可通过多途径共同作用改善AD。
[2]闫勇江,郑永才.阿尔茨海默症运动干预的研究进展[J].职业与健康,2020,36(21):3013-3016+3020.DOI:10.13329/j.cnki.zyyjk.2020.0823.
[3]李怡,王艳.综合性护理干预对老年性痴呆患者认知功能障碍的影响[J].中国医药指南,2017,15(16):237-238.
摘要:目的分析综合性护理干预在老年性痴呆患者中的应用效果。方法选取我院2014年9月至2016年9月收治的78例老年性痴呆患者为研究对象,将入组的患者随机分为对照组39例和研究组39例,对照组患者给予常规的基础护理,研究组患者在此基础上实施综合性护理干预,比较两组患者干预前后简易智力量表(MMSE)评分、日常生活功能水平量表(ADL)评分、汉密顿抑郁量表(HAMD)评分以及焦虑量表(HAMA)评分。结果干预后研究组患者日常生活能力显著优于对照组,焦虑抑郁情绪评分显著低于对照组,两组比较差异性显著(P<0.05),但MMSE评分两组比较无显著性差异(P>0.05)。结论综合性护理干预能有效的改善老年性痴呆患者认知功能,具有重要的临床应用价值。
[4]彭亚会,李冀宏,惠洋,高旭.阿尔茨海默症诊断和监测的唾液生物标记物[J].生命的化学,2021,41(01):49-54.DOI:10.13488/j.smhx.20200246.
[5]容华斌. 基于功能核磁共振影像的阿尔茨海默症早期诊断研究[D].广东工业大学,2022.DOI:10.27029/d.cnki.ggdgu.2022.001487.


