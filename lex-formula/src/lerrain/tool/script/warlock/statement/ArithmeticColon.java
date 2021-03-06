package lerrain.tool.script.warlock.statement;

import lerrain.tool.formula.Factors;
import lerrain.tool.script.warlock.Code;
import lerrain.tool.script.warlock.analyse.Expression;
import lerrain.tool.script.warlock.analyse.Words;

public class ArithmeticColon extends Code
{
	Code[] v;

	String symbol;
	
	public ArithmeticColon(Words ws, int i)
	{
		super(ws, i);

		v = new Code[2];
		v[0] = Expression.expressionOf(ws.cut(0, i));
		v[1] = Expression.expressionOf(ws.cut(i + 1));

		symbol = ws.getWord(i);
	}

	public String getSymbol()
	{
		return symbol;
	}

	public Object run(Factors factors)
	{
		return v;
	}
	
	public String toText(String space, boolean line)
	{
		return (line ? space : "") + v[0].toText(space, line) + " : " + v[1].toText(space, line);
	}
}
