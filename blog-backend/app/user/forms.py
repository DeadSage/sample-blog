from django.forms import Form
from django.forms import CharField, TextInput, EmailField, DateTimeField


class CustomUserFormSearch(Form):
    email = EmailField(required=False)
    first_name = CharField(required=False)
    last_name = CharField(required=False)
    date_joined = DateTimeField(required=False, widget=TextInput(
        attrs={
            'filter_field': 'date',
            'filter_method': '__gte',
            'data-mask': "00/00/0000",
            'placeholder': 'MM/DD/YYYY',
        }
    ))
