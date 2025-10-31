# Python Example: Reading Entities
# Filterable fields: event_id, event_title, event_date, event_time, event_location, user_email, user_name, num_tickets, total_price, booking_status
import requests

def make_api_request(api_path, method='GET', data=None):
    url = f'https://app.base44.com/api/{api_path}'
    headers = {
        'api_key': '92083f6f20434ae28681d83f1aa88512',
        'Content-Type': 'application/json'
    }
    if method.upper() == 'GET':
        response = requests.request(method, url, headers=headers, params=data)
    else:
        response = requests.request(method, url, headers=headers, json=data)
    response.raise_for_status()
    return response.json()

entities = make_api_request(f'apps/6903c9f2c8cd6d3d457ff1f2/entities/Booking')
print(entities)

# Python Example: Updating an Entity
# Filterable fields: event_id, event_title, event_date, event_time, event_location, user_email, user_name, num_tickets, total_price, booking_status
def update_entity(entity_id, update_data):
    response = requests.put(
        f'https://app.base44.com/api/apps/6903c9f2c8cd6d3d457ff1f2/entities/Booking/{entity_id}',
        headers={
            'api_key': '92083f6f20434ae28681d83f1aa88512',
            'Content-Type': 'application/json'
        },
        json=update_data
    )
    response.raise_for_status()
    return response.json()