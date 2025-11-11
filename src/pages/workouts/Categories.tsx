
import { categories } from '../../constant/data'

const Categories = () => {
  return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {categories.map((category, index) => (
              <div key={index} className="group hover:shadow-[0px_0px_12px_0px_rgb(0_0_0_/0.2)] transition-all cursor-pointer hover:-translate-y-1 rounded-xl bg-card text-card-foreground shadow-[0px_0px_5px_0px_rgb(0_0_0_/0.2)]
">
                  <div className="text-center pb-4 flex flex-col space-y-1.5 p-6">
                      <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-linear-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                          <category.icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="text-xl font-semibold leading-none tracking-tight">{category.name}</div>
                      <div className='text-sm text-muted-foreground'>{category.count} workouts</div>
                  </div>
              </div>
          ))}
      </div>
  )
}

export default Categories