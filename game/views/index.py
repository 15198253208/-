from django.shortcuts import render
# 每一个函数都会传一个request信息
def index(request):
    return render(request, "multiends/web.html")
# Django默认从templates目录下开始找，所以路径直接从multiends开始写
