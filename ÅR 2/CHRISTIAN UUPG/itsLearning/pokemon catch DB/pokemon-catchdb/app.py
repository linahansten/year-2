from sympy import symbols, Eq, solve

m, b = symbols('m b')

# Två kända punkter (exp, sannolikhet)
punkt1 = (45, 0.5)  # (exp, sannolikhet)
punkt2 = (320, 0.20)

# Skapa två ekvationer baserat på linjär ekvation y = mx + b
ekvation1 = Eq(punkt1[1], m * punkt1[0] + b)
ekvation2 = Eq(punkt2[1], m * punkt2[0] + b)

# Lös ekvationerna för att hitta m och b
lösning = solve((ekvation1, ekvation2), (m, b))
print (lösning[m], lösning[b])