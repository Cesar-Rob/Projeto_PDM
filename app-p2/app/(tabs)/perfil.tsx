import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import {useRouter} from "expo-router";

export default function Perfil() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      {/* Header Profile Section */}
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>SR</Text>
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.userName}>Sanmira Ranna</Text>
          <Text style={styles.userRole}>COLECIONADORA DESDE 2026</Text>
        </View>
      </View>

      {/* Stats Section */}
      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>7</Text>
          <Text style={styles.statLabel}>Achados</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>12</Text>
          <Text style={styles.statLabel}>Favoritos</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>2</Text>
          <Text style={styles.statLabel}>A caminho</Text>
        </View>
      </View>

      {/* Menu Options Section */}
      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuItemLeft}>
            <Text style={styles.iconPlaceholder}>📦</Text>
            <Text style={styles.menuItemText}>Meus pedidos</Text>
          </View>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>2 NOVOS</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.divider} />

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuItemLeft}>
            <Text style={styles.iconPlaceholder}>❤️</Text>
            <Text style={styles.menuItemText}>Favoritos</Text>
          </View>
          <Text style={styles.iconPlaceholder}>➔</Text>
        </TouchableOpacity>
        <View style={styles.divider} />

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuItemLeft}>
            <Text style={styles.iconPlaceholder}>📍</Text>
            <Text style={styles.menuItemText}>Endereços</Text>
          </View>
          <Text style={styles.iconPlaceholder}>➔</Text>
        </TouchableOpacity>
        <View style={styles.divider} />

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuItemLeft}>
            <Text style={styles.iconPlaceholder}>💳</Text>
            <Text style={styles.menuItemText}>Pagamento e Pix</Text>
          </View>
          <Text style={styles.iconPlaceholder}>➔</Text>
        </TouchableOpacity>
        <View style={styles.divider} />

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuItemLeft}>
            <Text style={styles.iconPlaceholder}>🔔</Text>
            <Text style={styles.menuItemText}>Avisos de novos achados</Text>
          </View>
          <Text style={styles.iconPlaceholder}>➔</Text>
        </TouchableOpacity>
        <View style={styles.divider} />

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuItemLeft}>
            <Text style={styles.iconPlaceholder}>❓</Text>
            <Text style={styles.menuItemText}>Ajuda</Text>
          </View>
          <Text style={styles.iconPlaceholder}>➔</Text>
        </TouchableOpacity>
      </View>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton} onPress={() => router.replace('/auth')}>
        <Text style={styles.logoutText}>Sair da conta</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7EFE1', // Light beige background
  },
  header: {
    backgroundColor: '#4E3424', // Dark brown
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    paddingTop: 40,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#C8933B', // Goldish color
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFF',
  },
  avatarText: {
    fontSize: 24,
    color: '#333',
  },
  userInfo: {
    marginLeft: 15,
  },
  userName: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  userRole: {
    color: '#C8933B',
    fontSize: 12,
    marginTop: 5,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
  },
  statBox: {
    backgroundColor: '#EBDDC5',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '30%',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
  },
  menuContainer: {
    paddingHorizontal: 20,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconPlaceholder: {
    fontSize: 20,
    marginRight: 15,
    color: '#8B5A2B',
  },
  menuItemText: {
    fontSize: 16,
    color: '#333',
  },
  badge: {
    backgroundColor: '#C8933B',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
  },
  badgeText: {
    color: '#333',
    fontSize: 10,
    fontWeight: 'bold',
  },
  divider: {
    height: 1,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: '#8B5A2B',
    opacity: 0.3,
  },
  logoutButton: {
    margin: 20,
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#9C3D32',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  logoutText: {
    color: '#9C3D32',
    fontSize: 16,
    fontWeight: 'bold',
  },
});