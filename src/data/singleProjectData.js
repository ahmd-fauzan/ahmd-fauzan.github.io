//Import Images
import Kredit1Image from '../images/kredit_1.png';
import Kredit2Image from '../images/kredit_2.png';
import Tabungan1Image from '../images/tabungan_1.png';
import Tabungan2Image from '../images/tabungan_2.png';
import SahabatStore2Image from '../images/sahabatStore2.jpg';
import SahabatStore3Image from '../images/sahabatStore3.jpg';
import SahabatStore4Image from '../images/sahabatStore4.jpg';

//Import Data
import { projectsData } from './projects';

export const singleProjectData = [
  {
	id: 1,
    ProjectHeader: {
      title: 'Aplikasi Tabungan Sekolah Dasar',
      publishDate: '2024',
      tags: 'Mobile Application',
    },
    ProjectImages: [
      { id: 1, title: 'Tabungan_1', img: Tabungan1Image },
      { id: 2, title: 'Tabungan_2', img: Tabungan2Image },
    ],
    ProjectInfo: {
      OverviewHeading: 'Project Overview',
      OverviewDetails:
        'Aplikasi ini dirancang untuk membantu sekolah mengelola tabungan siswa dengan fitur pencatatan yang mudah digunakan.',
      GoalHeading: 'Goal',
      GoalDetails:
        'Memberikan solusi digital bagi sekolah untuk mengatur, menyimpan, dan memonitor data tabungan siswa.',
      Technologies: [
        {
          title: 'Tools & Technologies',
          techs: ['React Native', 'Golang'],
        },
      ],
      ProjectDetailsHeading: 'Feature & Details',
      ProjectDetails: {
        description:
          'Aplikasi ini memungkinkan guru mengelola data tabungan siswa dengan cepat dan aman langsung dari perangkat mobile. Dengan antarmuka yang mudah digunakan, aplikasi ini mendukung pencatatan transaksi di mana saja dan kapan saja, sesuai kebutuhan sekolah.',
        feature: [
          {
            id: 1,
            title: 'Dashboard',
            details:
              'Memberikan ringkasan data tabungan, seperti total saldo, transaksi terbaru, dan statistik siswa aktif.',
          },
          {
            id: 2,
            title: 'Pencatatan Transaksi',
            details:
              'Fitur untuk menambah setoran dan penarikan tabungan siswa, dilengkapi dengan rincian lengkap untuk setiap transaksi.',
          },
          {
            id: 3,
            title: 'Riwayat Transaksi',
            details:
              'Guru dapat mengakses riwayat tabungan untuk memudahkan pemantauan dan pelaporan.',
          },
        ],
      },
    },
    RelatedProject: {
      title: 'Related Projects',
      Projects: [
        projectsData[1]
      ],
    },
  },
  // Tambahkan proyek lain jika perlu
  {
	id: 2,
    ProjectHeader: {
      title: 'Aplikasi Management Kredit',
      publishDate: '2022',
      tags: 'Mobile Application',
    },
    ProjectImages: [
      { id: 1, title: 'Kredit_1', img: Kredit1Image },
      { id: 2, title: 'Kredit_2', img: Kredit2Image },
    ],
    ProjectInfo: {
      OverviewHeading: 'Project Overview',
      OverviewDetails:
        'Aplikasi ini adalah aplikasi mobile untuk memudahkan pencatatan transaksi kredit, ditujukan bagi pengguna individu. Aplikasi ini memungkinkan pemantauan transaksi kredit dan memberikan informasi detail setiap orang yang melakukan kredit.',
      GoalHeading: 'Goal',
      GoalDetails:
        'Menyediakan platform mobile yang memudahkan pencatatan dan pemantauan transaksi kredit, dengan akses cepat dan informasi yang lengkap bagi setiap pengguna. Aplikasi ini bertujuan untuk mengoptimalkan manajemen data kredit sehingga lebih efisien dan terorganisir.',
      Technologies: [
        {
          title: 'Tools & Technologies',
          techs: ['Android Studio', 'Java', 'Kotlin', 'Firebase'],
        },
      ],
      ProjectDetailsHeading: 'Feature & Details',
      ProjectDetails: {
        description:
          'Aplikasi pengelolaan kredit ini membantu mencatat transaksi kredit pengguna dengan mudah dan memberikan informasi detail tentang setiap orang yang melakukan kredit. Dengan antarmuka yang intuitif, aplikasi ini memungkinkan pengguna individu mengelola kredit secara efisien dan aman.',
        feature: [
          {
            id: 1,
            title: 'Dashboard Kredit',
            details:
              'Menyajikan informasi lengkap tentang data kredit, termasuk total saldo kredit, dan transaksi terakhir. Dashboard memberikan gambaran umum tentang status kredit pengguna secara real-time.',
          },
          {
            id: 2,
            title: 'Pencatatan Transaksi Kredit',
            details:
              'Pengguna dapat mencatat setiap transaksi kredit, meliputi detail seperti jumlah kredit, tanggal transaksi, serta data orang yang melakukan kredit, sehingga semua data kredit tersimpan dengan baik.',
          },
          {
            id: 3,
            title: 'Manajemen Data Pengguna Kredit',
            details:
              'Fitur ini memudahkan admin atau lembaga untuk mencatat data setiap orang yang melakukan kredit, termasuk informasi pribadi dan detail kredit. Dengan Firebase, data pengguna aman dan bisa diakses sesuai kebutuhan.',
          },
          {
            id: 4,
            title: 'Riwayat Transaksi',
            details: 'Pengguna dapat melihat riwayat lengkap transaksi kredit mereka, baik yang sedang berlangsung maupun yang sudah selesai.'
          }
        ],
      },
    },
    
    RelatedProject: {
      title: 'Related Projects',
      Projects: [
        projectsData[0]
      ],
    },
  },
  {
    id: 3,
      ProjectHeader: {
        title: 'Sahabat Store Application',
        publishDate: '2025',
        tags: 'Web Application',
      },
      ProjectImages: [
        { id: 1, title: 'SahabatStore_2', img: SahabatStore2Image},
        { id: 2, title: 'SahabatStore_3', img: SahabatStore3Image },
        { id: 3, title: 'SahabatStore_4', img: SahabatStore4Image },
      ],
      ProjectInfo: {
        OverviewHeading: 'Project Overview',
        OverviewDetails:
          'Aplikasi ini merupakan aplikasi web untuk mengelola Point Of Sale',
        GoalHeading: 'Goal',
        GoalDetails:
          'Menyediakan platform web yang memudahkan pencatatan dan pemantauan transaksi toko, dengan akses cepat dan informasi yang lengkap bagi setiap pengguna. Aplikasi ini bertujuan untuk mengoptimalkan manajemen data toko sehingga lebih efisien dan terorganisir.',
        Technologies: [
          {
            title: 'Tools & Technologies',
            techs: ['Springboot', 'Java', 'Angular', 'Tailwind'],
          },
        ],
        ProjectDetailsHeading: 'Feature & Details',
        ProjectDetails: {
          description:
            'Aplikasi pengelolaan POS ini membantu mencatat transaksi dengan mudah dan memberikan informasi detail. Dengan antarmuka yang intuitif, aplikasi ini memungkinkan pengguna individu mengelola POS secara efisien dan aman.',
          feature: [
            {
              id: 1,
              title: 'Dashboard',
              details:
                'Menyajikan informasi lengkap tentang penjualan hari ini, penjualan per tahun, pengeluaran dan total produk',
            },
            {
              id: 2,
              title: 'Inventory',
              details:
                'Pengguna dapat melihat informasi mengenai product dan dapat menambahkan produk baru',
            },
            {
              id: 3,
              title: 'Supplier',
              details:
                'Pengguna dapat melihat informasi mengenai supplier dan dapat menambahkan supplier baru',
            },
            {
              id: 4,
              title: 'Sales Orders',
              details: 'Pengguna dapat melihat informasi transaksi penjualan dan mencatat transaksi penjualan'
            }
          ],
        },
      },
      
      RelatedProject: {
        title: 'Related Projects',
        Projects: [
          projectsData[0],
          projectsData[1]
        ],
      },
    },
];

