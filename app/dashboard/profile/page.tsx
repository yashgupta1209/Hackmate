'use client';

export default function ProfilePage() {
  return (
    <div style={{ minHeight: '100vh', padding: 'clamp(10px, 5%, 30px)' }}>
      <h1 style={{ marginBottom: '30px' }}>Profile Page</h1>

      {/* Big Container 1 - Red */}
      <div
        style={{
          backgroundColor: 'rgb(255, 0, 0)',
          padding: 'clamp(15px, 4%, 30px)',
        }}
      >
        {/* Big Container 2 - Cyan */}
        <div
          style={{
            backgroundColor: 'aqua',
            padding: 'clamp(10px, 3%, 20px)',
          }}
        >
          {/* Big Container 3 - Green */}
          <div
            style={{
              backgroundColor: 'rgb(0, 255, 0)',
              padding: 'clamp(20px, 10%, 350px)',
              position: 'relative',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 'clamp(10px, 3%, 25px)',
              '@media': 'only screen and (max-width: 768px)',
            }}
          >
            {/* Small Box - Top Left / Grid Item 1 */}
            <div
              style={{
                width: 'clamp(200px, 100%, 500px)',
                height: 'clamp(100px, 30vw, 150px)',
                backgroundColor: 'white',
                padding: 'clamp(20px, 5%, 50px)',
                borderRadius: '8px',
              }}
            />

            {/* Small Box 2 - Top Right / Grid Item 2 */}
            <div
              style={{
                width: 'clamp(200px, 100%, 500px)',
                height: 'clamp(100px, 30vw, 150px)',
                backgroundColor: 'white',
                padding: 'clamp(20px, 5%, 50px)',
                borderRadius: '8px',
              }}
            />

            {/* Under Small Boxes - Middle / Grid Item 3 */}
            <div
              style={{
                gridColumn: '1 / -1',
                height: 'clamp(100px, 30vw, 150px)',
                backgroundColor: 'blue',
                padding: 'clamp(20px, 5%, 50px)',
                borderRadius: '8px',
              }}
            />

            {/* Inside Bottom Box / Grid Item 4 */}
            <div
              style={{
                gridColumn: '1 / -1',
                height: 'clamp(100px, 30vw, 150px)',
                backgroundColor: 'yellow',
                padding: 'clamp(20px, 5%, 50px)',
                borderRadius: '8px',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}