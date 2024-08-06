处理PDF 合并PDF
```python
import os  
import glob  
from PyPDF2 import PdfReader, PdfMerger  
  
os.chdir(r"E:\pyProject\general\pdf\pdfs")  # 更改工作文件夹  
pdfs = os.listdir('.')  # 读取全部PDF文件  
  
pdfall = PdfMerger()  # 创建一个空白PDF  
for pdf in pdfs:  # 利用循环进行合并PDF  
    with open(pdf, "rb") as temp:  
        pdfreader = PdfReader(temp)  
        pdfall.append(pdfreader, import_outline=True)  
  
pdf_save = open(r".\pdfall.pdf", "wb")  # 定义要保存的文件名  
pdfall.write(pdf_save)  
pdf_save.close()  # 保存并退出
```
将PDF的长宽改为相同
```python
from PyPDF2 import PdfReader, PdfWriter  

with open(".\pdfs\pdfall.pdf", 'rb') as infile, open('output.pdf', 'wb') as outfile:  
    reader = PdfReader(infile)  
    writer = PdfWriter()  
  
    page = reader.pages[0]  
    width = page.mediabox.width  
    height = page.mediabox.height  
  
    for i in range(len(reader.pages)):  
        page = reader.pages[i]  
        page.cropbox.lower_left = (0, 0)  
        page.cropbox.upper_right = (width, height)  
        writer.add_page(page)  
  
    writer.write(outfile)
```