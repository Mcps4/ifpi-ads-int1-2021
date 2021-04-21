import requests
import requests_cache
from bs4 import BeautifulSoup
import re
def baixar_link():
    requests_cache.install_cache()
    link = input('Digite um link: ')
    response = requests.get(link)
    html = response.text

    beautysoup = BeautifulSoup(html, 'html.parser')
    return beautysoup

def buscar_listar_links(beautysoup):
    cont = 0
    link_list = []
    links = beautysoup.select('a[href*="http"]')
    for link in links:
        if cont < 10:
            link_list.append(link.get('href'))
            cont += 1
    for i in range(len(link_list)):
        print(f'{i + 1} >>>> {link_list[i]}')

    palavra_chave = input('Digite uma palavra-chave: ')
    num = int(input('Digite o número do link: '))
    response = requests.get(link_list[num - 1])

    word_list = beautysoup.find_all(string= re.compile(palavra_chave))
    for word in word_list:
        print('>>>>>', word)
    

def main():
    beautysoup = baixar_link()
    buscar_listar_links(beautysoup)
    option = int(input('Digite 0 para sair do programa!'))
    while option != 0:
        main()





main()










