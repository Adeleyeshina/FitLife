import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { weightData, workoutData } from '../../constant/data';

const Charts = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6 mb-7">
      {/* Weight Progress */}
      <div className="rounded-xl border-gray-200 bg-white text-black shadow p-6">
        <h2 className="font-semibold mb-2">Weight Progress</h2>
        <p className="text-sm mb-4 text-gray-500">
          Your weight loss journey over 8 weeks
        </p>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={weightData}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
            <XAxis dataKey="date" stroke="var(--color-muted-foreground)" />
            <YAxis stroke="var(--color-muted-foreground)" domain={[170, 190]} />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="weight"
              stroke="var(--color-primary)"
              strokeWidth={3}
              dot={{ fill: 'var(--color-primary)', r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Weekly Activity */}
      <div className="rounded-xl border-gray-200 bg-white text-black shadow p-6">
        <h2 className="font-semibold mb-2">Weekly Activity</h2>
        <p className="text-sm mb-4 text-gray-500">
          Calories burned per day this week
        </p>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={workoutData}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
            <XAxis dataKey="day" stroke="var(--color-muted-foreground)" />
            <YAxis stroke="var(--color-muted-foreground)" />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="calories"
              fill="var(--color-chart-2)"
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Charts;
