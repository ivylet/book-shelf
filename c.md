

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
 附件中的同一样本包含在不同时间点收集的特征，请根据时间点对其进行分析，以揭示不同类别疾病随时间演变的模式。



问题四要求我们的是根据附件中同一样本在不同时间点收集的数据的特征，根据时间点的变化对其进行分析。我们的解决方案是通过绘制数据的特征属性与月份的关系图表，从图表中发现出数据随时间变化的特征，来展示出同一特征属性在随着月份增大的情况下的变化趋势。

数据筛选
根据第二问的分析，我们决定要分析的特征属性为MOCA、EcogPtTotal、EcogSPTotal、Ventricles、Hippocampus、WholeBrain、Entorhinal、Fusiform、MidTemp和ICV。这几项是关于患者的大脑结构特征与认知行为特征，疾病的随着时间的演变可以通过这些属性来展现。我们通过Excel表格筛选出了相关数据，并且通过Excel表格绘制散点图进行判断。


通过表格
画散点图，根据散点图判断各类特征与时间的关系。

根据表格中M列，即该次诊断距离初次诊断的月份差，与其他对应关于属性的列，进行判断。

表格中的x坐标为月份，y坐标为对应数据取值。我们通过分析起初时的点个数，与随着x轴向右增大散点数的变化来判断该特征属性随着时间变化的整体趋势，从而分析得到同一样本的特征属性随着时间变化的趋势。但是由于在所有样本中同一样本在不同时间点的案例是不同的，所以会出现在x轴取原点的散点个数与在x轴非原点处的个数不同，甚至出现差别很大的情况。由于数据量过大以及时间不足的情况，我们没有采用能够更加准确表现同一样本的特征属性在不同时间的变化趋势的方法。

我们通过散点图的散点分布分析得出，随着时间变化，整体水平呈现出增加的趋势的是MOCA；整体水平有降低的趋势是EcogPtTotal、EcogSPTotal、Ventricles和Hippocampus；整体水平变化较小包括CDRSB、WholeBrain、Entorhinal、Fusiform、MidTemp以及ICV。这些与前边的分析局有一定的吻合度，符合基本的设想。

其中关于MOCA与CDRSB关于月份变化的图表如下。其他的属性的图表放在附录中。

MOCA与月份的关系图

摘要：针对问题4，我们通过选出可以表示疾病随着时间变化而展现处变化的相关属性。将这些属性与属性M列，即收集数据的时间距离基准线时间的月份，通过绘制散点图来揭示属性随时间的总体变化趋势，通过总体变化趋势推断出同一样本在不同时间点各个特征属性的随时间变化的模式。






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






3.2.2 KNN 算法 
KNN 算法，即为 K 近邻算法，是一种非参数分类法，由 Cover 和 Hart[46]在 1968 年提出，主要用于分析回归和分类问题。
它的工作机制是：对于未标记的对象，根据已经确定的距离度量函数来计算未标记对象与所有对象的距离，找出距离未标记样本对象最近的 K 个训练样本，未标记样本对象的特征就由 K 个训 练样本的信息特征决定。KNN 算法依赖于极限定理，方法简单有效，被应用于 众多领域。图 3.6 为 KNN 算法模型原理图。


 3.6 KNN 算法模型原理图 
 待预测的数据点由图中实心蓝色圆点表示，其他样本对象由黑色虚线空心圆 圈表示，距离度量标准由图中的的黑色加粗虚线圆表示，圈内的所有样本点即为 待预测点的近邻，圈内近邻的特性即为带预测点的特性。KNN 算法有三个关键 要素分别是： 
 （1）K 值的选择。K 值代表了输入样本与其临近的邻居个数，K 值较小时 说明进行预测时对比的样本数量过少，容易造成过拟合现象，导致出现较大的误 差。当 K 值较大时意味着会采集到较远的点，与真实值之间特征不匹配，偏差 过大，造成欠拟合现象，导致预测结果误差较大。 
 （2）距离度量。距离度量是对被预测的样本和其它训练样本的距离进行计 算。两点之间的距离远近决定着它们的相似性，距离短则相似性高，距离长则相 似性低。常用的测量方法有：欧氏距离、曼哈顿距离等方式。 
（3）决策方法。决策方法是指已知 K 个最近邻居的类别，用相应的策略或 方法判断输入的待预测样本。常用的方法是多数表决法，输入的待预测样本的分 类取决于数量上最多的邻居的类别。另一种方法是权重多数表决法，根据距离将 K 个最近的邻居赋予不同的权重，从而提高精确度。另外，也可以根据数据类型、 使用场景的不同制定不同的决策方法。 
KNN 算法的实现步骤如下： 
Step1.构建训练样本集合 X； 
Step2.确定 K 值。针对特定场景特定分析，选取合适的 K 值； 
Step3.选取 K 个距离最近的样本点。使用距离度量方法进行挑选，常用的方 法为欧氏距离法。
Step4.得到待预测样本的类别。


[46] Cover T, Hart P. Nearest neighbor pattern classification[J]. IEEE transactions on information theory, 1967, 13(1): 21-27.





缺失森林插补法（MissForest）[32]是在 2012 年由学者 Stekhoven 提出的，是一种建 立在随机森林算法（Random Forest）的基础上的非参数插补方法，它能够适用于多种数 据结构，可处理不同类型的变量，既适用于连续型变量，也适用于离散型变量，能够很 好地运用于复杂相互作用和非线性关系的数据环境中。算法主要通过对没有包含缺失值 的样本利用随机森林算法进行训练，然后对有缺失值的样本使用随机森林算法预测其缺 失值，再不断地迭代处理缺失值的插补情况。 提出缺失森林插补法，主要是希望可以利用该方法来处理多种类型的缺失数据，并 能尽可能较少考虑数据结构方面。此前，Mazumder[44]等人使用相似的方法对矩阵完成 问题使用软阈值 SVD 迭代地替换缺失值。而选择随机森林是因为它可以处理混合型数 据，并且作为一种非参数方法，它在高维度，复杂交互和非线性数据结构等条件下表现 良好，这样可使用迭代插补方案解决缺失数据问题。基于其准确性和稳健性，随机森林 比较适合用于包含这些条件的缺失值插补的应用研究，这是缺失森林插补法提出的动机 及思路。


缺失森林插补法（Missforest）[32,46] 是一种建立在随机森林算法的基础上的非参数 插补方法，它适用于数据的多种数据结构，可很好地处理不同类型的变量，能较好地运 用于复杂相互作用和非线性关系的数据环境中。
[32]Stekhoven D J, Bühlmann P. MissForest-non-parametric missing value imputation for mixed-type data[J]. Bioinformatics, 2011, 28(1): 112-118
[46]Stekhoven D J. missForest: Nonparametric missing value imputation using random forest[J]. Astrophysics Source Code Library, 2015



[1]殷振滔. 随机缺失值填补及其效果研究[D].上海师范大学,2018.





基本假设：
患者的病情不受诊断次数影响，
不考虑患者多重族裔血脉的影响


优点：问题四使用绘制图像的方法分析随时间变化，各个成分的变化趋势可以快速分析大量数据。

缺点：问题四分析存在局限性，只能够从大体角度分析问题，无法准确的分析同一变量的不同特征随时间变化的情况。