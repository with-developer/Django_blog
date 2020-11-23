from django import template
register = template.Library()

@register.filter
def category_filter(value):
    value = value.replace('&', '')
    value = value.replace('/', '')
    value = value.replace('?', '')
    value =value.replace('page=', '' )
    value =value.replace('1', '')
    value =value.replace('2', '')
    value =value.replace('3', '')
    value =value.replace('4', '')
    value =value.replace('5', '')
    value =value.replace('6', '')
    value =value.replace('7', '')
    value =value.replace('8', '')
    value =value.replace('9', '')
    value =value.replace('0', '')
    return value

@register.filter
def category_filter2(value):
    value = value.replace('&', '')
    value = value.replace('/', '')
    value = value.replace('?', '')
    value =value.replace('page=', '' )
    value =value.replace('category=', '' )
    value =value.replace('1', '')
    value =value.replace('2', '')
    value =value.replace('3', '')
    value =value.replace('4', '')
    value =value.replace('5', '')
    value =value.replace('6', '')
    value =value.replace('7', '')
    value =value.replace('8', '')
    value =value.replace('9', '')
    value =value.replace('0', '')
    return value

