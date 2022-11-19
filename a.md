Problem A：

Automatic seismic horizon tracking

With the economic and social development of our country, the importance of geological work is also increasing. Seismic data interpretation is an important stage of seismic exploration engineering, which can clarify subsurface tectonic features for oil and gas exploration and can provide good and favorable reservoirs for oil and gas exploration; accurate stratigraphic information is the basis of seismic data interpretation and is an important basis for storage prediction. Seismic horizon tracking is one of the key technologies in seismic data interpretation, a good seismic horizon tracking method can greatly improve the efficiency and accuracy of seismic data interpretation.

It is the main goal of seismic exploration to obtain the information of underground structure lithology and reservoir, because the main formation interface is generally a good wave impedance interface, the seismic wave is affected by the formation interface when it propagates in the underground medium, and finally shows different seismic reflection characteristics, such as the morphology, intensity, frequency and continuity of the homogeneous axis of seismic reflection. Structural information such as the shape and burial depth of the stratigraphic interface can be obtained directly from seismic data. Since this kind of structural information is the most intuitive and easily used information of seismic data, it has become one of the most important targets of seismic exploration to extract structural information from seismic data since the birth of seismic exploration technology.

In reflected seismic data, the seismic wave impedance interface usually corresponds to the formation interface or lithologic interface, but the lithologic interface can not always form wave impedance interface, only in those adjacent formations with large enough wave impedance difference can form wave impedance interface. Although the lithology of strata formed in different geological ages is usually different, only through the alternation of sedimentary compaction and sedimentary hiatus in millions of years can the differences in rock physical properties (density, porosity, etc.) between adjacent strata be revealed, the combination of lithology and rock physical properties (differences) will form significant wave impedance differences, therefore, seismic reflection events axis on seismic profiles usually correspond to sedimentary isochronous surfaces rather than macroscopic lithological interfaces. According to this theory, the stratigraphic interface indicated by seismic events axis is the discontinuity of the stratigraphic deposition process, because of its relative isochronism, this sedimentary discontinuity is basically consistent with the structural characteristics of the stratum, therefore, seismic events axis is the main signs to identify the stratigraphic interface. The spatial distribution characteristics and time domain variation characteristics of seismic events axis are the main basis for horizon interpretation. Seismic events axis can also be used to obtain information such as stratigraphic dip and azimuth.

In the era of two-dimensional seismic exploration and the early stage of three-dimensional seismic exploration, the horizon interpretation of seismic data is mainly single-layer, that is, several seismic events axes with good continuity corresponding to the strong stratigraphic reflection interface are selected from the seismic profile for tracking. Because of the low efficiency of this horizon interpretation method and the small number of seismic event axis that can be easily traced on the seismic profile, the number of horizons that can be obtained is limited, resulting in the traditional seismic structure interpretation model unable to obtain detailed geological structure information, so the detailed description of geological structure characteristics is not clear enough. In other words, the traditional seismic horizon interpretation method ignores or wastes a lot of seismic information, and it has been unable to meet the requirements of modern seismic structure interpretation and geological comprehensive research in terms of accuracy and efficiency. With the development of three-dimensional seismic exploration, especially high-density seismic exploration technology, the accuracy of seismic data obtained is getting higher and higher, and the number of seismic data is increasing, automatic extraction of structural, lithological, fluid and other information from seismic data has become the key to the progress of modern seismic data interpretation, it is also the goal that geophysicists and geologists are striving for.

The existing seismic horizon tracking methods are usually done manually by seismic horizon interpreters. In the interpretation of seismic data, the tracking of the event axis is very important. Interpreters are mainly based on seismic wave dynamics and kinematics characteristics, namely amplitude, in-phase or continuity, waveform similarity three criteria, and artificial contrast tracking. The artificial horizon tracking is to manually track the continuous reflection events axes of the bottom layer on the two-dimensional seismic profile by using the waveform similarity to obtain the horizon line (stratigraphic interface), and then interpolate all the horizon lines to form the horizon surface. However, artificial horizon tracking labor cost demand is large, not only time-consuming, but also has a great impact on the efficiency of seismic exploration.

In order to overcome the problems of low tracking time efficiency and poor reliability of results, researchers have begun to attach great importance to the automatic horizon tracking method in recent years. The automatic horizon tracking method is to search for ' seed points ' with similar characteristics on seismic traces, search through these characteristics, and search the next region repeatedly after meeting the conditions. This method solves the problem that it is difficult to obtain artificial horizon information when the terrain is more complex, and the information obtained is more accurate than that obtained manually.

At present, there are two better automatic horizon tracking criteria, namely automatic tracking based on waveform characteristics and automatic tracking based on correlation. Automatic tracking based on waveform features is to find only similar waveform structures (crests, troughs, zero crossings, etc.) of feature points in the search time window, but no correlation calculations are performed between the seismic traces, and the defined troughs, crests, and crossings are searched one by one. Because the continuity and stability between the local areas of the underground are reflected in the seismic time profile, it is the similarity and continuity of the seismic wave reflection layer in the amplitude of the seismic wave reflection layer on the adjacent seismic channel. Therefore, based on the relevant horizon automatic tracking algorithm, the seed point is taken as the center, according to the relevant time window range, a seismic channel is selected, and the seismic data of this section of seismic data is correlated with the seismic data in the search time window of the adjacent channel, if the characteristic point that meets the conditions is found in the search time window, the point is fixed as a new seed point, and then the next trace is picked up.
Please establish a mathematical model based on the attached data to solve the following problems: 

（1）There are often a lot of noise in seismic data, please use effective methods to denoise the accessory data.

（2）Establish the correlation of seismic strata automatic tracking model or design the corresponding new tracking algorithm, and track the attachment data. 

（3）Establish an automatic tracking model based on waveform features or design a corresponding new tracking algorithm, and track the attachment data. 

（4）Evaluate the results of two automatic tracking models (or algorithms), verify the rationality of the model, analyze the error between the data obtained from the experiment and the actual data, and make a reasonable explanation. 

（5）Establish a three-dimensional horizon automatic tracking model based on correlation and waveform, and an algorithm is implemented on the data given in the annex to realize horizon tracking and identify and analyze the fault data. Notes: A profile is made up of a set of curves, horizon tracking, is to trace the event axis. An event axis on a profile is a curve, and multiple event axis bar curves, make up the horizon











随着我国经济社会的发展，地质工作的重要性也越来越高。地震资料解释是地震勘探工程的一个重要阶段，它可以为油气勘探阐明地下构造特征，为油气勘查提供良好有利的储层；准确的地层信息是地震资料解释的基础，是储层预测的重要依据。地震层位追踪是地震资料解释中的关键技术之一，一种好的地震层位追踪方法可以大大提高地震资料解释的效率和精度。
地震勘探的主要目标是获得地下结构岩性和储层的信息，因为主要地层界面通常是良好的波阻抗界面，地震波在地下介质中传播时受到地层界面的影响，最终表现出不同的地震反射特征，如形态、，地震反射均匀轴的强度、频率和连续性。地层界面的形状和埋藏深度等结构信息可以直接从地震数据中获得。由于这种结构信息是地震数据中最直观、最容易使用的信息，因此自地震勘探技术诞生以来，从地震数据中提取结构信息已成为地震勘探最重要的目标之一。

在反射地震资料中，地震波阻抗界面通常对应于地层界面或岩性界面，但岩性界面并不总是能形成波阻抗界面，只有在波阻抗差足够大的相邻地层中才能形成波阻抗。尽管不同地质年代形成的地层岩性通常不同，但只有通过数百万年来沉积压实和沉积间断的交替，才能揭示相邻地层之间岩石物理性质（密度、孔隙度等）的差异，岩性和岩石物理性质（差异）的组合将形成显著的波阻抗差异，因此，地震剖面上的地震反射事件轴通常对应于沉积等时表面，而不是宏观岩性界面。根据这一理论，地震事件轴指示的地层界面是地层沉积过程的不连续性，由于其相对等时性，这种沉积不连续性与地层的结构特征基本一致，因此，地震事件轴线是识别地层界面的主要标志。地震事件轴的空间分布特征和时域变化特征是层位解释的主要依据。地震事件轴也可用于获得地层倾角和方位角等信息。
在二维地震勘探时代和三维地震勘探早期，地震数据的层位解释主要是单层的，即从地震剖面中选择与强地层反射界面相对应的几个连续性较好的地震事件轴进行跟踪。由于这种层位解释方法的效率较低，且地震剖面上可容易追踪的地震事件轴数量较少，因此可获得的层位数量有限，导致传统的地震构造解释模型无法获得详细的地质构造信息，因此，对地质构造特征的详细描述不够清晰。换言之，传统的地震层位解释方法忽视或浪费了大量地震信息，在精度和效率方面已经不能满足现代地震构造解释和地质综合研究的要求。随着三维地震勘探，特别是高密度地震勘探技术的发展，获得的地震数据的精度越来越高，地震数据的数量越来越多，地震资料中的流体和其他信息已成为现代地震资料解释进展的关键，也是地球物理学家和地质学家努力追求的目标。

为了克服跟踪时间效率低和结果可靠性差的问题，近年来，研究人员开始高度重视自动地平线跟踪方法。自动层位跟踪方法是在地震道上搜索具有相似特征的“种子点”，通过这些特征进行搜索，并在满足条件后重复搜索下一个区域。该方法解决了地形更复杂时难以获得人工地平线信息的问题，获得的信息比人工获得的信息更准确。
目前，有两种更好的自动地平线跟踪标准，即基于波形特征的自动跟踪和基于相关性的自动跟踪。基于波形特征的自动跟踪是在搜索时间窗口中仅找到特征点的相似波形结构（波峰、波谷、过零点等），但不在地震道之间执行相关计算，并且逐个搜索定义的波谷、波峰和过零点。由于地震时间剖面反映了地下局部区域之间的连续性和稳定性，因此地震波反射层在相邻地震道上地震波反射的振幅上的相似性和连续性。因此，基于相关的层位自动跟踪算法，以种子点为中心，根据相关的时间窗范围，选择地震道，并将该段地震数据的地震数据与相邻地震道搜索时间窗中的地震数据相关联，如果在搜索时间窗口中找到满足条件的特征点，则将该点固定为新的种子点，然后拾取下一个轨迹。

请根据所附数据建立数学模型，以解决以下问题：
（1） 地震数据中经常存在大量噪声，请使用有效的方法对辅助数据进行去噪。
（2） 建立地震地层自动跟踪模型的相关性或设计相应的新跟踪算法，并跟踪附着数据。
（3） 基于波形特征建立自动跟踪模型或设计相应的新跟踪算法，并跟踪附件数据。
（4） 评估两个自动跟踪模型（或算法）的结果，验证模型的合理性，分析实验获得的数据与实际数据之间的误差，并做出合理解释。
（5） 建立基于相关性和波形的三维层位自动跟踪模型，并对附件中给出的数据实施算法，实现层位跟踪，识别和分析故障数据。注：轮廓由一组曲线组成，水平追踪是为了追踪事件轴。纵断面上的事件轴是一条曲线，多条事件轴条形曲线构成地平线