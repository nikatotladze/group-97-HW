#1
def ips_between(start, end):
    def ip_to_int(ip):
        octets = list(map(int, ip.split('.')))
        return (octets[0] << 24) + (octets[1] << 16) + (octets[2] << 8) + octets[3]
        
    return ip_to_int(end) - ip_to_int(start)

#2
def cakes(recipe, available):
    return min(available.get(ingredient, 0) // amount for ingredient, amount in recipe.items())

#3
def pig_it(text):
    return ' '.join(w[1:] + w[0] + 'ay' if w.isalpha() else w for w in text.split())

#4
def rgb(r, g, b):
    r = max(0, min(r, 255))
    g = max(0, min(g, 255))
    b = max(0, min(b, 255))
    
    return f"{r:02X}{g:02X}{b:02X}"

#5
def ips_between(start, end):
    def ip_to_int(ip):
        octets = list(map(int, ip.split('.')))
        return (octets[0] << 24) + (octets[1] << 16) + (octets[2] << 8) + octets[3]
        
    return ip_to_int(end) - ip_to_int(start)