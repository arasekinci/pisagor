import React from 'react'

import Container, { ContainerProps } from '../Container'

const Wordmark: React.FunctionComponent<ContainerProps> = (props) => {
  return (
    <Container aria-label="Atlaskit Starter Wordmark" {...props}>
      <canvas width="221" height="50" aria-hidden="true" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 221 50"
        width="221"
        height="50"
      >
        <path
          fillRule="evenodd"
          d="M20.96 37L17.57 37C17.2 36.04 16.86 35.1 16.54 34.18C16.22 33.25 15.89 32.3 15.55 31.34L5.5 31.34L3.49 37L0.26 37C1.11 34.65 1.91 32.49 2.66 30.5C3.41 28.5 4.13 26.6 4.83 24.81C5.56 23.02 6.27 21.31 6.98 19.69C7.68 18.04 8.41 16.42 9.18 14.82L12.03 14.82C12.8 16.42 13.53 18.04 14.24 19.69C14.95 21.31 15.65 23.02 16.35 24.81C17.08 26.6 17.81 28.5 18.56 30.5C19.31 32.49 20.11 34.65 20.96 37ZM6.4 28.78L14.66 28.78C13.97 26.92 13.29 25.13 12.61 23.4C11.95 21.65 11.26 19.98 10.53 18.38C9.78 19.98 9.07 21.65 8.38 23.4C7.72 25.13 7.06 26.92 6.4 28.78ZM26.56 15.21L26.56 20.36L32.86 20.36L32.86 22.86L26.56 22.86L26.56 30.54C26.56 31.37 26.62 32.06 26.75 32.62C26.88 33.15 27.07 33.58 27.33 33.9C27.58 34.19 27.9 34.41 28.29 34.54C28.67 34.67 29.12 34.73 29.63 34.73C30.53 34.73 31.25 34.63 31.78 34.44C32.33 34.23 32.72 34.08 32.93 33.99L33.5 36.46C33.21 36.61 32.69 36.8 31.94 37.03C31.19 37.24 30.34 37.35 29.38 37.35C28.25 37.35 27.31 37.21 26.56 36.94C25.83 36.64 25.25 36.2 24.8 35.62C24.35 35.05 24.03 34.34 23.84 33.51C23.67 32.66 23.58 31.68 23.58 30.57L23.58 15.72L26.56 15.21ZM42.05 34.82L41.63 37.32C39.8 37.28 38.5 36.89 37.73 36.14C36.96 35.39 36.58 34.23 36.58 32.65L36.58 12.68L39.55 12.17L39.55 32.17C39.55 32.66 39.59 33.06 39.68 33.38C39.77 33.7 39.91 33.96 40.1 34.15C40.29 34.34 40.54 34.49 40.86 34.6C41.18 34.69 41.58 34.76 42.05 34.82ZM50.75 19.94C51.94 19.94 52.95 20.1 53.76 20.42C54.59 20.72 55.25 21.16 55.74 21.74C56.25 22.29 56.62 22.96 56.83 23.75C57.04 24.52 57.15 25.37 57.15 26.31L57.15 36.71C56.9 36.76 56.53 36.82 56.06 36.9C55.61 36.97 55.1 37.03 54.53 37.1C53.95 37.16 53.32 37.22 52.64 37.29C51.98 37.33 51.32 37.35 50.66 37.35C49.72 37.35 48.85 37.25 48.06 37.06C47.27 36.87 46.59 36.58 46.02 36.17C45.44 35.74 44.99 35.19 44.67 34.5C44.35 33.82 44.19 33 44.19 32.04C44.19 31.12 44.37 30.33 44.74 29.67C45.12 29.01 45.63 28.48 46.27 28.07C46.91 27.66 47.66 27.37 48.51 27.18C49.36 26.99 50.26 26.89 51.2 26.89C51.5 26.89 51.81 26.91 52.13 26.95C52.45 26.97 52.75 27.01 53.02 27.08C53.32 27.12 53.58 27.16 53.79 27.21C54 27.25 54.15 27.28 54.24 27.3L54.24 26.47C54.24 25.98 54.19 25.5 54.08 25.03C53.97 24.54 53.78 24.12 53.5 23.75C53.23 23.37 52.84 23.07 52.35 22.86C51.88 22.62 51.27 22.5 50.5 22.5C49.51 22.5 48.65 22.58 47.9 22.73C47.18 22.86 46.64 22.99 46.27 23.14L45.92 20.68C46.31 20.51 46.95 20.35 47.84 20.2C48.73 20.03 49.7 19.94 50.75 19.94ZM51.01 34.86C51.71 34.86 52.33 34.85 52.86 34.82C53.42 34.78 53.88 34.72 54.24 34.63L54.24 29.67C54.03 29.56 53.67 29.48 53.18 29.42C52.71 29.33 52.14 29.29 51.46 29.29C51.01 29.29 50.53 29.32 50.02 29.38C49.53 29.45 49.07 29.59 48.64 29.8C48.23 29.99 47.89 30.27 47.62 30.63C47.34 30.97 47.2 31.43 47.2 32.01C47.2 33.08 47.54 33.82 48.22 34.25C48.91 34.66 49.84 34.86 51.01 34.86ZM65.95 34.86C67.17 34.86 68.07 34.7 68.64 34.38C69.24 34.06 69.54 33.55 69.54 32.84C69.54 32.11 69.25 31.54 68.67 31.11C68.1 30.68 67.15 30.2 65.82 29.67C65.18 29.42 64.56 29.16 63.97 28.9C63.39 28.63 62.89 28.31 62.46 27.94C62.03 27.58 61.69 27.14 61.44 26.63C61.19 26.12 61.06 25.49 61.06 24.74C61.06 23.27 61.6 22.11 62.69 21.26C63.78 20.38 65.26 19.94 67.14 19.94C67.61 19.94 68.07 19.97 68.54 20.04C69.01 20.08 69.45 20.14 69.86 20.23C70.26 20.3 70.61 20.37 70.91 20.46C71.23 20.54 71.48 20.61 71.65 20.68L71.1 23.24C70.78 23.07 70.28 22.9 69.6 22.73C68.92 22.54 68.1 22.44 67.14 22.44C66.31 22.44 65.58 22.61 64.96 22.95C64.34 23.27 64.03 23.78 64.03 24.49C64.03 24.85 64.09 25.17 64.22 25.45C64.37 25.72 64.59 25.98 64.86 26.22C65.16 26.43 65.52 26.63 65.95 26.82C66.38 27.01 66.89 27.22 67.49 27.43C68.28 27.73 68.98 28.03 69.6 28.33C70.22 28.6 70.74 28.93 71.17 29.32C71.62 29.71 71.96 30.18 72.19 30.73C72.42 31.26 72.54 31.92 72.54 32.71C72.54 34.25 71.97 35.41 70.82 36.2C69.69 36.99 68.06 37.38 65.95 37.38C64.48 37.38 63.33 37.26 62.5 37.03C61.67 36.78 61.1 36.59 60.8 36.46L61.34 33.9C61.69 34.03 62.23 34.22 62.98 34.47C63.73 34.73 64.72 34.86 65.95 34.86ZM82.37 27.85C83.01 28.34 83.68 28.94 84.38 29.67C85.11 30.4 85.81 31.19 86.5 32.04C87.2 32.87 87.86 33.73 88.48 34.6C89.1 35.45 89.62 36.25 90.05 37L86.56 37C86.11 36.25 85.59 35.5 84.99 34.73C84.42 33.94 83.81 33.19 83.17 32.49C82.53 31.76 81.88 31.1 81.22 30.5C80.55 29.91 79.92 29.41 79.33 29L79.33 37L76.35 37L76.35 12.68L79.33 12.17L79.33 27.34C79.84 26.83 80.41 26.26 81.02 25.64C81.64 25.02 82.25 24.39 82.85 23.75C83.44 23.11 84.01 22.5 84.54 21.93C85.07 21.33 85.53 20.81 85.92 20.36L89.41 20.36C88.92 20.89 88.38 21.48 87.81 22.12C87.23 22.76 86.63 23.41 86.02 24.07C85.4 24.71 84.77 25.36 84.13 26.02C83.51 26.66 82.92 27.27 82.37 27.85ZM96.03 20.36L96.03 37L93.06 37L93.06 20.36L96.03 20.36ZM94.53 17.35C94 17.35 93.54 17.18 93.15 16.84C92.79 16.48 92.61 16 92.61 15.4C92.61 14.8 92.79 14.33 93.15 13.99C93.54 13.63 94 13.45 94.53 13.45C95.06 13.45 95.51 13.63 95.87 13.99C96.26 14.33 96.45 14.8 96.45 15.4C96.45 16 96.26 16.48 95.87 16.84C95.51 17.18 95.06 17.35 94.53 17.35ZM103.94 15.21L103.94 20.36L110.24 20.36L110.24 22.86L103.94 22.86L103.94 30.54C103.94 31.37 104 32.06 104.13 32.62C104.26 33.15 104.45 33.58 104.7 33.9C104.96 34.19 105.28 34.41 105.66 34.54C106.05 34.67 106.5 34.73 107.01 34.73C107.9 34.73 108.62 34.63 109.15 34.44C109.7 34.23 110.09 34.08 110.3 33.99L110.88 36.46C110.58 36.61 110.06 36.8 109.31 37.03C108.56 37.24 107.71 37.35 106.75 37.35C105.62 37.35 104.69 37.21 103.94 36.94C103.21 36.64 102.63 36.2 102.18 35.62C101.73 35.05 101.41 34.34 101.22 33.51C101.05 32.66 100.96 31.68 100.96 30.57L100.96 15.72L103.94 15.21ZM126.75 34.79C130 34.79 131.62 33.68 131.62 31.46C131.62 30.78 131.47 30.21 131.17 29.74C130.89 29.25 130.51 28.83 130.02 28.49C129.53 28.12 128.96 27.81 128.32 27.56C127.7 27.31 127.04 27.05 126.34 26.79C125.53 26.52 124.76 26.21 124.03 25.86C123.3 25.5 122.67 25.09 122.14 24.62C121.61 24.13 121.18 23.55 120.86 22.89C120.57 22.23 120.42 21.43 120.42 20.49C120.42 18.55 121.08 17.03 122.4 15.94C123.72 14.85 125.54 14.31 127.87 14.31C129.22 14.31 130.43 14.46 131.52 14.76C132.63 15.04 133.44 15.35 133.95 15.69L132.96 18.22C132.51 17.94 131.84 17.67 130.94 17.42C130.07 17.14 129.04 17 127.87 17C127.28 17 126.72 17.06 126.21 17.19C125.7 17.32 125.25 17.51 124.86 17.77C124.48 18.02 124.17 18.35 123.94 18.76C123.73 19.15 123.62 19.61 123.62 20.14C123.62 20.73 123.74 21.23 123.97 21.64C124.2 22.05 124.53 22.41 124.96 22.73C125.39 23.03 125.88 23.31 126.43 23.56C127.01 23.81 127.64 24.07 128.32 24.33C129.28 24.71 130.15 25.09 130.94 25.48C131.75 25.87 132.45 26.33 133.02 26.86C133.62 27.39 134.08 28.03 134.4 28.78C134.72 29.5 134.88 30.38 134.88 31.43C134.88 33.37 134.17 34.86 132.74 35.91C131.33 36.96 129.33 37.48 126.75 37.48C125.88 37.48 125.07 37.43 124.32 37.32C123.59 37.19 122.94 37.05 122.37 36.9C121.79 36.73 121.29 36.56 120.86 36.39C120.46 36.2 120.14 36.04 119.9 35.91L120.83 33.35C121.32 33.63 122.07 33.94 123.07 34.28C124.08 34.62 125.3 34.79 126.75 34.79ZM141.22 15.21L141.22 20.36L147.52 20.36L147.52 22.86L141.22 22.86L141.22 30.54C141.22 31.37 141.28 32.06 141.41 32.62C141.54 33.15 141.73 33.58 141.98 33.9C142.24 34.19 142.56 34.41 142.94 34.54C143.33 34.67 143.78 34.73 144.29 34.73C145.18 34.73 145.9 34.63 146.43 34.44C146.98 34.23 147.37 34.08 147.58 33.99L148.16 36.46C147.86 36.61 147.34 36.8 146.59 37.03C145.84 37.24 144.99 37.35 144.03 37.35C142.9 37.35 141.97 37.21 141.22 36.94C140.49 36.64 139.91 36.2 139.46 35.62C139.01 35.05 138.69 34.34 138.5 33.51C138.33 32.66 138.24 31.68 138.24 30.57L138.24 15.72L141.22 15.21ZM156.67 19.94C157.86 19.94 158.87 20.1 159.68 20.42C160.51 20.72 161.17 21.16 161.66 21.74C162.17 22.29 162.54 22.96 162.75 23.75C162.96 24.52 163.07 25.37 163.07 26.31L163.07 36.71C162.82 36.76 162.45 36.82 161.98 36.9C161.53 36.97 161.02 37.03 160.45 37.1C159.87 37.16 159.24 37.22 158.56 37.29C157.9 37.33 157.24 37.35 156.58 37.35C155.64 37.35 154.77 37.25 153.98 37.06C153.19 36.87 152.51 36.58 151.94 36.17C151.36 35.74 150.91 35.19 150.59 34.5C150.27 33.82 150.11 33 150.11 32.04C150.11 31.12 150.29 30.33 150.66 29.67C151.04 29.01 151.55 28.48 152.19 28.07C152.83 27.66 153.58 27.37 154.43 27.18C155.28 26.99 156.18 26.89 157.12 26.89C157.42 26.89 157.73 26.91 158.05 26.95C158.37 26.97 158.67 27.01 158.94 27.08C159.24 27.12 159.5 27.16 159.71 27.21C159.92 27.25 160.07 27.28 160.16 27.3L160.16 26.47C160.16 25.98 160.11 25.5 160 25.03C159.89 24.54 159.7 24.12 159.42 23.75C159.15 23.37 158.76 23.07 158.27 22.86C157.8 22.62 157.19 22.5 156.42 22.5C155.43 22.5 154.57 22.58 153.82 22.73C153.1 22.86 152.56 22.99 152.19 23.14L151.84 20.68C152.23 20.51 152.87 20.35 153.76 20.2C154.65 20.03 155.62 19.94 156.67 19.94ZM156.93 34.86C157.63 34.86 158.25 34.85 158.78 34.82C159.34 34.78 159.8 34.72 160.16 34.63L160.16 29.67C159.95 29.56 159.59 29.48 159.1 29.42C158.63 29.33 158.06 29.29 157.38 29.29C156.93 29.29 156.45 29.32 155.94 29.38C155.45 29.45 154.99 29.59 154.56 29.8C154.15 29.99 153.81 30.27 153.54 30.63C153.26 30.97 153.12 31.43 153.12 32.01C153.12 33.08 153.46 33.82 154.14 34.25C154.83 34.66 155.76 34.86 156.93 34.86ZM174.14 20.01C174.4 20.01 174.69 20.03 175.01 20.07C175.35 20.09 175.68 20.13 176 20.2C176.32 20.24 176.61 20.29 176.86 20.36C177.14 20.4 177.34 20.44 177.47 20.49L176.96 23.08C176.73 22.99 176.33 22.9 175.78 22.79C175.25 22.66 174.55 22.6 173.7 22.6C173.14 22.6 172.58 22.66 172.03 22.79C171.5 22.9 171.15 22.97 170.98 23.02L170.98 37L168 37L168 21.06C168.71 20.81 169.58 20.57 170.62 20.36C171.67 20.13 172.84 20.01 174.14 20.01ZM183.14 15.21L183.14 20.36L189.44 20.36L189.44 22.86L183.14 22.86L183.14 30.54C183.14 31.37 183.2 32.06 183.33 32.62C183.46 33.15 183.65 33.58 183.9 33.9C184.16 34.19 184.48 34.41 184.86 34.54C185.25 34.67 185.7 34.73 186.21 34.73C187.1 34.73 187.82 34.63 188.35 34.44C188.9 34.23 189.29 34.08 189.5 33.99L190.08 36.46C189.78 36.61 189.26 36.8 188.51 37.03C187.76 37.24 186.91 37.35 185.95 37.35C184.82 37.35 183.89 37.21 183.14 36.94C182.41 36.64 181.83 36.2 181.38 35.62C180.93 35.05 180.61 34.34 180.42 33.51C180.25 32.66 180.16 31.68 180.16 30.57L180.16 15.72L183.14 15.21ZM191.97 28.71C191.97 27.24 192.18 25.96 192.61 24.87C193.04 23.76 193.6 22.85 194.3 22.12C195.01 21.39 195.82 20.85 196.74 20.49C197.65 20.12 198.59 19.94 199.55 19.94C201.79 19.94 203.51 20.65 204.7 22.06C205.9 23.45 206.5 25.57 206.5 28.42C206.5 28.55 206.5 28.73 206.5 28.94C206.5 29.13 206.49 29.31 206.46 29.48L195.07 29.48C195.2 31.21 195.7 32.52 196.58 33.42C197.45 34.31 198.82 34.76 200.67 34.76C201.72 34.76 202.59 34.67 203.3 34.5C204.02 34.31 204.56 34.13 204.93 33.96L205.34 36.46C204.98 36.65 204.34 36.85 203.42 37.06C202.53 37.27 201.5 37.38 200.35 37.38C198.9 37.38 197.65 37.17 196.58 36.74C195.53 36.29 194.67 35.69 193.98 34.92C193.3 34.15 192.79 33.25 192.45 32.2C192.13 31.13 191.97 29.97 191.97 28.71ZM195.14 27.08L203.39 27.08C203.41 25.73 203.07 24.63 202.37 23.78C201.68 22.91 200.73 22.47 199.52 22.47C198.84 22.47 198.23 22.61 197.7 22.89C197.19 23.14 196.75 23.48 196.38 23.91C196.02 24.34 195.73 24.83 195.52 25.38C195.33 25.94 195.2 26.51 195.14 27.08ZM216.93 20.01C217.18 20.01 217.47 20.03 217.79 20.07C218.13 20.09 218.46 20.13 218.78 20.2C219.1 20.24 219.39 20.29 219.65 20.36C219.92 20.4 220.13 20.44 220.26 20.49L219.74 23.08C219.51 22.99 219.11 22.9 218.56 22.79C218.03 22.66 217.33 22.6 216.48 22.6C215.93 22.6 215.37 22.66 214.82 22.79C214.29 22.9 213.93 22.97 213.76 23.02L213.76 37L210.78 37L210.78 21.06C211.49 20.81 212.36 20.57 213.41 20.36C214.46 20.13 215.63 20.01 216.93 20.01Z"
        />
      </svg>
    </Container>
  )
}

export default Wordmark